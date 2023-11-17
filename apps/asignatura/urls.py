from django.urls import path
from .views import DjangoAsignaturaAPIView

urlpatterns = [
    path('', DjangoAsignaturaAPIView.as_view(), name='asignaturas'),
]
