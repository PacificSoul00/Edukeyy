from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import DjangoDocenteAsignaturaView

router = DefaultRouter()
router.register(r'', DjangoDocenteAsignaturaView, basename='docente_asignatura')

urlpatterns = [
    path('', include(router.urls)),
]