from rest_framework import serializers
from .models import *

class AsignaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model=DjangoAsignatura
        fields=[
            'id_asignatura',
            'nombre_asignatura',
            'rut_profesor',
        ]
