from django.shortcuts import render
from rest_framework import viewsets
from .models import DjangoAsignatura
from .serializers import AsignaturaSerializer
from rest_framework import permissions
from rest_framework.views import APIView  
from rest_framework.response import Response
from rest_framework import status

class DjangoAsignaturaAPIView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        sigla_asignatura = request.GET.get('sigla_asignatura', None)
        seccion = request.GET.get('seccion', None)

        if sigla_asignatura and seccion:
            asignaturas = DjangoAsignatura.objects.filter(sigla_asignatura=sigla_asignatura, seccion=seccion)
        elif sigla_asignatura:
            asignaturas = DjangoAsignatura.objects.filter(sigla_asignatura=sigla_asignatura)
        elif seccion:
            asignaturas = DjangoAsignatura.objects.filter(seccion=seccion)
        else:
            asignaturas = DjangoAsignatura.objects.all()

        if asignaturas.exists():
            result = []
            serializer = AsignaturaSerializer(asignaturas, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No hay registros'}, status=status.HTTP_404_NOT_FOUND)