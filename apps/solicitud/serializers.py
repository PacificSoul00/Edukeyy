from rest_framework import serializers
from .models import DjangoSolicitud

class DjangoSolicitudSerializer(serializers.ModelSerializer):
    class Meta:
        model = DjangoSolicitud
        fields = '__all__'