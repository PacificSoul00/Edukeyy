from rest_framework import serializers
from .models import *

class RegistroEstudianteSerializers(serializers.ModelSerializer):
    class Meta:
        model=DjangoRegistroEstudiante
        fields=[
            'uid',
            'id_asignatura',
            'cod_aula',
            'rut',
            'fecha_reg',
            'estado_reg',
        ]
