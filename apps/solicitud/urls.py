from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DjangoSolicitudView, DjangoSolicitudDetailView


urlpatterns = [
    path('', DjangoSolicitudView.as_view(), name='solicitudes'),
    path('buscar/<int:id_solicitud>/', DjangoSolicitudDetailView.as_view()),
]