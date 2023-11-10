from django.urls import path
from .views import * 

urlpatterns = [
    path('', listRegistrosEstudiantesView.as_view(), name='list_registros'),
    ]