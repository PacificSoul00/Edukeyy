from django.shortcuts import render
from rest_framework.views import APIView  
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import status
from .models import DjangoRegistro
from .serializers import RegistroSerializers
from django.http import JsonResponse
from django.views import View
import time

class listRegistrosView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self,request, format=None):

        if DjangoRegistro.objects.all().exists():
            registros = DjangoRegistro.objects.all()
            result=[]

            for registro in registros:
                item = {}
                item['cod_registro']=registro.cod_registro
                item['uid']=registro.uid
                item['fecha_reg']=registro.fecha_reg

                result.append(item)

            return Response({'registros': result}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'No hay registros'}, status=status.HTTP_404_NOT_FOUND)

class RegistroLongPollingView(View):
    def get(self, request, *args, **kwargs):
        timeout = 30  # Tiempo máximo de espera en segundos
        start_time = time.time()

        while True:
            # Consulta a la base de datos para obtener nuevos datos
            registros = DjangoRegistro.objects.all()
            if registros.exists():
                data = list(registros.values('cod_registro', 'fecha_reg'))
                return JsonResponse({'registros': data})

            # Si ha pasado el tiempo máximo de espera, termina la solicitud
            if time.time() - start_time > timeout:
                break

            time.sleep(5)  # Espera antes de consultar nuevamente a la base de datos

        return JsonResponse({'error': 'Tiempo de espera agotado'}, status=408)



# Create your views here.
