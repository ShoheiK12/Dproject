from django.shortcuts import render
from django.views import View

class IndexView(View):
    # When accessing portfolio app, get method is activated.
    def get(self, request):
        # When getting request, return index.html
        return render(request, "portfolio/index.html")

index = IndexView.as_view()
