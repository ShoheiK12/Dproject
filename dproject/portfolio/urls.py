from django.urls import path
from . import views


app_name = "portfolio"
# routing 
urlpatterns = [
    # path(path, function, name)
    path("", views.index, name="index"),
    path("calculator/", views.calculator, name="calculator"),
    path("brain-urgency/", views.brain_urgency, name="brain_urgency"),
    path("projects/", views.projects, name="projects"),
]