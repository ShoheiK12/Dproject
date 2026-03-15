from django.shortcuts import render
from django.views import View
from .brain_tumour_urgency_score import run_urgency_analysis
from django.core.files.storage import FileSystemStorage

class IndexView(View):
    # When accessing portfolio app, get method is activated.
    def get(self, request):
        # When getting request, return index.html
        return render(request, "portfolio/index.html")
    
class JSCalculatorView(View):
    def get(self, request):
        return render(request, "portfolio/JSCalculator.html")
    
class BrainTumourUrgencyView(View):

    def get(self, request):
        return render(request, "portfolio/brain_tumour_urgency_score.html")

    def post(self, request):

        uploaded_file = request.FILES["mri_file"]

        fs = FileSystemStorage()
        filename = fs.save(uploaded_file.name, uploaded_file)
        filepath = fs.path(filename)

        result = run_urgency_analysis(filepath)

        return render(
            request,
            "portfolio/brain_tumour_urgency_score.html",
            result
        )
    
class ProjectsView(View):
    def get(self, request):
        # If there's any data needed for the page that only displays the projects, put it in
        context = {}
        return render(request, "portfolio/projects.html", context)

index = IndexView.as_view()
calculator = JSCalculatorView.as_view()
brain_urgency = BrainTumourUrgencyView.as_view()
projects = ProjectsView.as_view()