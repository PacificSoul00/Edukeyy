from django.shortcuts import render
from rest_framework.views import APIView  
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import status
from .models import DjangoEstudiante
from .serializers import EstudianteSerializer
from django.http import JsonResponse
from django.views import View
import time

class listEstudiantesView(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = EstudianteSerializer

    def get_queryset(self):
        queryset = DjangoEstudiante.objects.all()
        rut_alu = self.request.query_params.get('rut_al', None)
        uid = self.request.query_params.get('uid', None)

        if rut_alu is not None:
            queryset = queryset.filter(rut_alu=rut_alu)
        
        if uid is not None:
            queryset = queryset.filter(uid=uid)

        return queryset

    def get(self,request, format=None):
        estudiantes = self.get_queryset()

        if estudiantes.exists():
            result=[]

            for estudiante in estudiantes:
                item = {}
                item['uid']=estudiante.uid
                item['rut_al']=estudiante.rut_al
                item['nom_al']=estudiante.nom_al
                item['app_alumno']=estudiante.app_alumno
                item['apm_alumno']=estudiante.apm_alumno
                result.append(item)

            return Response({'estudiantes': result}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'No hay estudiantes registrados'}, status=status.HTTP_404_NOT_FOUND)
