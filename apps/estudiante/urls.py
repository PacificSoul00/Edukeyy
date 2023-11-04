from django.urls import path
from .views import * 

urlpatterns = [
    path('', listEstudiantesView.as_view(), name='list_estudiantes'),
]
