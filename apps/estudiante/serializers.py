from rest_framework import serializers
from .models import *

class EstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model=DjangoEstudiante
        fields=[
            'uid',
            'rut_al',
            'nom_al',
            'app_alumno',
            'apm_alumno',
        ]
