from rest_framework import serializers
from .models import *

class AsignaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model=DjangoAsignatura
        fields=[
            'sigla_asignatura',
            'nom_asignatura',
            'seccion',
        ]
