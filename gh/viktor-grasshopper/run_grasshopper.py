# Pip install required packages
import os
import json
import compute_rhino3d.Grasshopper as gh
import compute_rhino3d.Util
import rhino3dm

# Set the compute_rhino3d.Util.url, default URL is http://localhost:6500/
compute_rhino3d.Util.url = 'http://localhost:6500/'

# Define path to local working directory
workdir = os.getcwd() + '\\'
print(workdir)

# # Read input parameters from JSON file
# with open(workdir + 'input.json') as f:
#     input_params = json.load(f)

# # Create the input DataTree
input_trees = []
# for key, value in input_params.items():
#     tree = gh.DataTree(key)
#     tree.Append([{0}], [str(value)])
#     input_trees.append(tree)

# Evaluate the Grasshopper definition
output = gh.EvaluateDefinition(
    workdir + 'GH_MeshOffset_02_PF.gh', #'sample_box_grasshopper.gh',
    input_trees
)

# Create a new rhino3dm file and add resulting geometry to file
file = rhino3dm.File3dm()
output_geometry = output['values'][0]['InnerTree']['{0}'][0]['data']
obj = rhino3dm.CommonObject.Decode(json.loads(output_geometry))
file.Objects.AddMesh(obj)

# Save the rhino3dm file to your working directory
file.Write(workdir + 'geometry.3dm', 7)
