from django.shortcuts import render
from rest_framework import viewsets
from .models import DjangoAsignatura
from .serializers import AsignaturaSerializer
from rest_framework import permissions
from rest_framework.views import APIView  
from rest_framework.response import Response
class DjangoAsignaturaViewSet(viewsets.ModelViewSet):
    
    serializer_class = AsignaturaSerializer
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        sigla_asignatura = self.request.query_params.get('sigla_asignatura', None)
        if sigla_asignatura is not None:
            queryset = DjangoAsignatura.objects.filter(sigla_asignatura=sigla_asignatura)
        else:
            queryset = DjangoAsignatura.objects.all()
        return queryset
