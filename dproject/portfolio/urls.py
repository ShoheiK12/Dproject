from django.urls import path
from . import views


app_name = "portfolio"
# routing 
urlpatterns = [
    # path(path, function, name)
    path("", views.index, name="index"),
]