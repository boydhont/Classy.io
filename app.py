import tempfile

from topologicpy.Cluster import Cluster
from topologicpy.Graph import Graph
from viktor import ViktorController, File, UserError
from viktor.external.generic import GenericAnalysis
from viktor.parametrization import ViktorParametrization, Text, FileField
from viktor.views import IFCView, IFCResult, GeometryView, GeometryResult, WebView, WebResult
import ifcopenshell
from io import BytesIO, StringIO

from topologic_code.ifc2graph import ByIFCRelationships, IFCRelationshipTypes, IFCRelationships


def convert_mm_to_m(value_in_mm):
    return value_in_mm / 1000.0


def get_ifc_file_path(ifc_file):
    # Create a temporary file-like object from the bytes string
    # Open the IFC file
    with tempfile.NamedTemporaryFile(delete=False) as temp_ifc_file:
        temp_ifc_file.write(ifc_file.getvalue_binary())

    # Open the IFC file using ifcopenshell
    return temp_ifc_file.name


def ifc_to_obj_file(ifc_file: File):
    # Open the IFC file using ifcopenshell
    ifc_file = ifcopenshell.open(get_ifc_file_path(ifc_file))

    # Create a StringIO object to store OBJ data as a string
    obj_stringio = StringIO()

    # Write OBJ data to the StringIO object
    for instance in ifc_file.by_type('IfcProduct'):
        # Extract geometry information (simplified example)
        if 'Representation' in instance:
            representation = instance.Representation
            for shape in representation.Representations:
                for item in shape.Items:
                    if isinstance(item, ifcopenshell.entity_instance):
                        # Assuming the geometry is stored in the 'Shape' attribute
                        if 'Shape' in item:
                            shape_data = item.Shape
                            for face in shape_data.Faces:
                                # Write face vertices to StringIO object
                                obj_stringio.write("f")
                                for vertex in face.Bounds[0].Bound.Vertices:
                                    # Convert coordinates from mm to meters
                                    x, y, z = [convert_mm_to_m(coord) for coord in vertex.Coordinates()]
                                    obj_stringio.write(" {0} {1} {2}".format(x, y, z))
                                obj_stringio.write("\n")

    return File.from_data(obj_stringio.getvalue())


class Parametrization(ViktorParametrization):
    intro_text = Text("""# Welcome to the Classy.io app
Let's make some steps in making IFC classification easier.

## Step 1: Upload your IFC file
    """)
    ifc_file_source = FileField('Upload IFC file', file_types=['.ifc'], flex=100)


class Controller(ViktorController):
    label = 'My Entity Type'
    parametrization = Parametrization(width=30)

    @IFCView('IFC view', duration_guess=1)
    def get_ifc_view(self, params, **kwargs):
        if not params.ifc_file_source:
            raise UserError("Make sure to upload an IFC file...")
        return IFCResult(params.ifc_file_source)

    @GeometryView("Results", duration_guess=5)
    def get_grasshopper_view(self, params, **kwargs):
        if not params.ifc_file_source:
            raise UserError("Make sure to upload an IFC file...")
        obj_file = ifc_to_obj_file(params.ifc_file_source.file)
        files = [('input.obj', obj_file)]

        # Run the Grasshopper analysis and obtain the output files
        generic_analysis = GenericAnalysis(files=files, executable_key="run_grasshopper",
                                           output_filenames=["geometry.3dm"])
        try:
            generic_analysis.execute(timeout=60)
        except Exception as e:
            raise UserError("Grasshopper calculation failed.\n"
                            "Please check whether the worker is connected...\n"
                            "Otherwise, check the logs on the machine...")
        threedm_file = generic_analysis.get_output_file("geometry.3dm", as_file=True)

        return GeometryResult(geometry=threedm_file, geometry_type="3dm")

    @WebView("Testing", duration_guess=5)
    def get_web_view(self, params, **kwargs):
        object_types = [
            'IfcRoof',
            'IfcStair',
            'IfcProject',
            'IfcSite',
            'IfcBuildingStorey',
            'IfcBuilding',
            'IfcSlab',
            'IfcSpad',
        ]
        path_ifc = get_ifc_file_path(params.ifc_file_source.file)
        ifc_file = ifcopenshell.open(path_ifc)
        print(IFCRelationshipTypes(ifc_file))
        ifc_rels = IFCRelationships(ifc_file, include=[])
        vertices, edges = ByIFCRelationships(ifc_rels, object_types)
        print(len(vertices))
        if len(vertices) > 0:
            g = Graph.ByVerticesEdges(vertices, edges)
        else:
            print("No vertices")
        return WebResult('')
