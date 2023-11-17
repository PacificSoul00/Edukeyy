from rest_framework.views import APIView
from rest_framework.response import Response
from .models import DjangoSolicitud
from .serializers import DjangoSolicitudSerializer
from rest_framework import permissions
from django.http import Http404
from rest_framework import viewsets

class DjangoSolicitudView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request):
        solicitudes = DjangoSolicitud.objects.all()
        serializer = DjangoSolicitudSerializer(solicitudes, many=True)
        return Response(serializer.data)

    def post(self, request):
        id_solicitud = request.data.get('id_solicitud')
        try:
            solicitud = DjangoSolicitud.objects.get(id_solicitud=id_solicitud)
            serializer = DjangoSolicitudSerializer(solicitud, data=request.data)
        except DjangoSolicitud.DoesNotExist:
            serializer = DjangoSolicitudSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class DjangoSolicitudDetailView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get_object(self, id_solicitud):
        try:
            return DjangoSolicitud.objects.get(id_solicitud=id_solicitud)
        except DjangoSolicitud.DoesNotExist:
            raise Http404

    def get(self, request, id_solicitud):
        solicitud = self.get_object(id_solicitud)
        serializer = DjangoSolicitudSerializer(solicitud)
        return Response(serializer.data)
