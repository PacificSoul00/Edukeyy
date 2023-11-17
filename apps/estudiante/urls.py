from django.urls import path
from .views import * 

urlpatterns = [
    path('', listEstudiantesView.as_view(), name='list_estudiantes'),
    path('rut_al/<str:rut_al>/', EstudiantePorUidView.as_view(), name='lista_estudiantes'),
]
