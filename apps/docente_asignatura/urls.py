from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import DjangoDocenteAsignaturaView

urlpatterns = [
    path('', DjangoDocenteAsignaturaView.as_view(), name='list_registros_docente'),
    ]