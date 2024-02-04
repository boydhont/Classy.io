from topologicpy.Topology import Topology
from topologicpy.Vertex import Vertex
from topologicpy.Edge import Edge
from topologicpy.Dictionary import Dictionary
import ifcopenshell
import ifcopenshell.util.placement
import ifcopenshell.util.element
import ifcopenshell.util.shape
import ifcopenshell.geom


def IFCRelationshipTypes(ifc_file):
    rel_types = [ifc_rel.is_a() for ifc_rel in ifc_file.by_types("IFCRelationship")]
    rel_types = list(set(rel_types))
    rel_types.sort()
    return rel_types

def IFCRelationships(ifc_file, include=[], exclude=[]):
    rel_types = [ifc_rel.is_a() for ifc_rel in ifc_file.by_types("IFCRelationship")]
    rel_types = list(set(rel_types))
    relationships = []
    for ifc_rel in ifc_file.by_type('IFCRelationship'):
        rel_type = ifc_rel.is_a()
        if rel_type in exclude:
            continue
        if rel_type in include or len(include) == 0:
            relationships.append(ifc_rel)
        return relationships

def vertexByIFCObject(ifc_object, object_types):
    settings = ifcopenshell.geom.settings()
    settings.set(settings.USE_BREP_DATA, False)
    settings.set(settings.SEW_SHELLS, True)
    settings.set(settings.USE_WORLD_COORDS, True)
    obj_id = ifc_object.id()
    psets = ifcopenshell.util.element.get_psets(ifc_object)
    obj_type = ifc_object.is_a()
    obj_type_id = object_types.index(obj_type)
    try:
        shape = ifcopenshell.geom.create_shape(settings, ifc_object)
    except:
        shape = None
    if shape:
        grouped_verts = ifcopenshell.util.shape.get_vertices(shape.geometry)
        vertices = [Vertex.ByCoordinates(list(coords)) for coords in grouped_verts]
        centroid = Vertex.Centroid(vertices)
        d = Dictionary.ByKeysValues(["id", "psets", "type", "type_id"], [obj_id, psets, obj_type, obj_type_id])
        centroid = Topology.SetDictionary(centroid, d)
        return centroid
    return None

def ByIFCRelationships (ifc_relationships, object_types):
    vertices = []
    # Edges
    edges = []
    for ifc_rel in ifc_relationships:
        source = None
        destinations = []
        if ifc_rel.is_a("IfcRelAggregates"):
            source= ifc_rel. RelatingObject
            destinations = ifc_rel.RelatedObjects
        if ifc_rel.is_a("IfcRelNests"):
            source = ifc_rel.RelatingObject
            destinations = ifc_rel. RelatedObjects
        if ifc_rel.is_a("IfcRelAssignsToGroup"):
            source = ifc_rel.RelatingGroup
            destinations = ifc_rel.RelatedObjects
        if ifc_rel.is_a("IfcRelConnectsPathElements"):
            source = ifc_rel. RelatingElement
            destinations = [ifc_rel.RelatedElement]
        if ifc_rel.is_a("IfcRelConnectsStructuralMember"):
            source= ifc_rel. RelatingStructuralMember
            destinations = [ifc_rel. RelatedStructuralConnection]
        if ifc_rel.is_a("IfcRelContainedInSpatialStructure"):
            source= ifc_rel. RelatingStructure
            destinations = ifc_rel.RelatedElements
        if ifc_rel.is_a("IfcRelFillsElement"):
            source = ifc_rel. RelatingOpeningElement
            destinations = [ifc_rel. RelatedBuildingElement]
        if ifc_rel.is_a("IfcRelSpaceBoundary"):
            source = ifc_rel. RelatingSpace
            destinations = [ifc_rel.RelatedBuildingElement]
        if ifc_rel.is_a("IfcRelVoidsElement"):
            source = ifc_rel.RelatingBuildingElement
            destinations = [ifc_rel.RelatedOpeningElement]
        if source:
            sv = vertexByIFCObject(source, object_types)
        if sv:
            vertices.append(sv)
            for destination in destinations:
                if destination is None:
                    continue
                ev = vertexByIFCObject(destination, object_types)
                if ev:
                    vertices.append(ev)
                    e = Edge.ByVertices([sv, ev])
                    d = Dictionary.ByKeysValues(["id", "name", "type"], [ifc_rel.id(), ifc_rel.Name, ifc_rel.is_a()])
                    e = Topology.SetDictionary(e, d)
                    edges.append(e)
    return [vertices, edges]
