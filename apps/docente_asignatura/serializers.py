from rest_framework import serializers
from .models import *

class DocenteAsignaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model=DocenteAsignatura
        fields=[
            'rut',
            'sigla_asignatura',
            'seccion',
        ]
