from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DocenteAsignaturaSerializer
from rest_framework import permissions
from rest_framework.views import APIView  
from rest_framework.response import Response
from .models import DocenteAsignatura

class DjangoDocenteAsignaturaView(viewsets.ModelViewSet):
    
    serializer_class = DocenteAsignaturaSerializer
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        rut = self.request.query_params.get('rut', None)
        if rut is not None:
            queryset = DocenteAsignatura.objects.filter(rut=rut)
        else:
            queryset = DocenteAsignatura.objects.all()
        return queryset