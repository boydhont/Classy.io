from io import BytesIO
import json

from viktor import ViktorController
from viktor.parametrization import ViktorParametrization
from viktor.parametrization import NumberField
from viktor.parametrization import Text
from viktor.external.generic import GenericAnalysis
from viktor.views import GeometryView
from viktor.views import GeometryResult


class Parametrization(ViktorParametrization):
    intro = Text("## Grasshopper app \n This app parametrically generates and visualizes a 3D model of a box using a Grasshopper script. \n\n Please fill in the following parameters:")

    # Input fields
    width = NumberField('Width', default=5)
    length = NumberField('Length', default=6)
    height = NumberField('Height', default=7)
    # count_x = NumberField('X repetitions', default = 10)
    # count_y = NumberField('Y repetitions', default = 10)


class Controller(ViktorController):
    label = 'My Entity Type'
    parametrization = Parametrization

    @GeometryView("Geometry", duration_guess=10, update_label='Run Grasshopper')
    def run_grasshopper(self, params, **kwargs):

        # Create a JSON file from the input parameters
        input_json = json.dumps(params)

        # Generate the input files
        files = [('input.json', BytesIO(bytes(input_json, 'utf8')))]

        # Run the Grasshopper analysis and obtain the output files
        generic_analysis = GenericAnalysis(files=files, executable_key="run_grasshopper", output_filenames=["geometry.3dm"])
        generic_analysis.execute(timeout=60)
        threedm_file = generic_analysis.get_output_file("geometry.3dm", as_file=True)

        return GeometryResult(geometry=threedm_file, geometry_type="3dm")