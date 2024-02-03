from pathlib import Path

from viktor import ViktorController, File, UserError
from viktor.parametrization import ViktorParametrization, Text, FileField
from viktor.views import IFCView, IFCResult


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
