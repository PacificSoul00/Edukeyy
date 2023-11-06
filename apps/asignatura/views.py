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
        rut_profesor = self.request.query_params.get('rut_profesor', None)
        if rut_profesor is not None:
            queryset = DjangoAsignatura.objects.filter(rut_profesor=rut_profesor)
        else:
            queryset = DjangoAsignatura.objects.all()
        return queryset
