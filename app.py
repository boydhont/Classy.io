from pathlib import Path

from viktor import ViktorController, File
from viktor.parametrization import ViktorParametrization, Text, FileField
from viktor.views import IFCView, IFCResult


class Parametrization(ViktorParametrization):
    intro_text = Text("""# Welcome to the Classy.io app
Let's make some steps in making IFC classification easier.

## Step 1: Upload your IFC file
    """)
    ifc_file_source = FileField('Upload IFC file', file_types=['.ifc'])


class Controller(ViktorController):
    label = 'My Entity Type'
    parametrization = Parametrization

    @IFCView('IFC view', duration_guess=1)
    def get_ifc_view(self, params, **kwargs):
        return IFCResult(params.ifc_file_source)
