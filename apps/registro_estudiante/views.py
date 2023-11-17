from django.shortcuts import render
from rest_framework.views import APIView  
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import status
from .models import DjangoRegistroEstudiante
from .serializers import RegistroEstudianteSerializers
from django.http import JsonResponse
from django.views import View
import time
# Create your views here.
class listRegistrosEstudiantesView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        rut = request.GET.get('rut', None)
        id_asignatura = request.GET.get('id_asignatura', None)

        if rut and id_asignatura:
            registros = DjangoRegistroEstudiante.objects.filter(rut=rut, id_asignatura=id_asignatura)
        elif rut:
            registros = DjangoRegistroEstudiante.objects.filter(rut=rut)
        elif id_asignatura:
            registros = DjangoRegistroEstudiante.objects.filter(id_asignatura=id_asignatura)
        else:
            registros = DjangoRegistroEstudiante.objects.all()

        if registros.exists():
            result = []

            for registro in registros:
                item = {}
                item['id_registro_estudiante'] = registro.id_registro_estudiante
                item['uid'] = registro.uid
                item['id_asignatura'] = registro.id_asignatura
                item['cod_aula'] = registro.cod_aula
                item['rut'] = registro.rut
                item['fecha_reg'] = registro.fecha_reg
                item['estado_reg'] = registro.estado_reg

                result.append(item)

            return Response({'registros': result}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No hay registros'}, status=status.HTTP_404_NOT_FOUND)
class FiltrarRegistrosEstudiantesView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        uid = request.GET.get('uid', None)
        id_asignatura = request.GET.get('id_asignatura', None)
        fecha_reg = request.GET.get('fecha_reg', None)

        if uid and id_asignatura and fecha_reg:
            registros = DjangoRegistroEstudiante.objects.filter(uid=uid, id_asignatura=id_asignatura, fecha_reg=fecha_reg)
        else:
            registros = DjangoRegistroEstudiante.objects.all()

        if registros.exists():
            result = []

            for registro in registros:
                item = {}
                item['id_registro_estudiante'] = registro.id_registro_estudiante
                item['uid'] = registro.uid
                item['id_asignatura'] = registro.id_asignatura
                item['cod_aula'] = registro.cod_aula
                item['rut'] = registro.rut
                item['fecha_reg'] = registro.fecha_reg
                item['estado_reg'] = registro.estado_reg

                result.append(item)

            return Response({'registros': result}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No hay registros'}, status=status.HTTP_404_NOT_FOUND)

class RegistroEstudianteView(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        id_registro_estudiante = request.data.get('id_registro_estudiante')
        try:
            registros = DjangoRegistroEstudiante.objects.get(id_registro_estudiante=id_registro_estudiante)
            serializer = RegistroEstudianteSerializers(registros, data=request.data)
        except DjangoRegistroEstudiante.DoesNotExist:
            serializer = RegistroEstudianteSerializers(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)