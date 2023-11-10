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

    def get(self,request, format=None):

        if DjangoRegistroEstudiante.objects.all().exists():
            registros = DjangoRegistroEstudiante.objects.all()
            result=[]

            for registro in registros:
                item = {}
                item['uid']=registro.uid
                item['id_asignatura']=registro.id_asignatura
                item['cod_aula']=registro.cod_aula
                item['rut']=registro.rut
                item['fecha_reg']=registro.fecha_reg
                item['estado_reg']=registro.estado_reg

                result.append(item)

            return Response({'registros': result}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'No hay registros'}, status=status.HTTP_404_NOT_FOUND)
