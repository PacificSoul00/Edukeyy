from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import DjangoAsignaturaViewSet

router = DefaultRouter()
router.register(r'', DjangoAsignaturaViewSet, basename='asignaturas')

urlpatterns = [
    path('', include(router.urls)),
]