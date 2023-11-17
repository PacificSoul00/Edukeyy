from django.urls import path
from .views import * 

urlpatterns = [
    path('', listRegistrosEstudiantesView.as_view(), name='list_registros'),
    path('filtrar_registros/', FiltrarRegistrosEstudiantesView.as_view(), name='filtrar_registros'),
    path('registro_estudiante/', RegistroEstudianteView.as_view(), name='registro_estudiante'),
    ]