from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DocenteAsignaturaSerializer
from rest_framework import permissions
from rest_framework.views import APIView  
from rest_framework.response import Response
from .models import DocenteAsignatura
from rest_framework import status

class DjangoDocenteAsignaturaView(APIView):
    
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
            rut = request.GET.get('rut', None)
            sigla_asignatura = request.GET.get('sigla_asignatura', None)

            if rut and sigla_asignatura:
                registros = DocenteAsignatura.objects.filter(rut=rut, sigla_asignatura=sigla_asignatura)
            elif rut:
                registros = DocenteAsignatura.objects.filter(rut=rut)
            elif sigla_asignatura:
                registros = DocenteAsignatura.objects.filter(sigla_asignatura=sigla_asignatura)
            else:
                registros = DocenteAsignatura.objects.all()

            if registros.exists():
                result = []

                for registro in registros:
                    item = {}
                    item['rut'] = registro.rut
                    item['sigla_asignatura'] = registro.sigla_asignatura
                    item['seccion'] = registro.seccion
                    result.append(item)

                return Response({'registros_docente_asignaturas': result}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'No hay registros'}, status=status.HTTP_404_NOT_FOUND)