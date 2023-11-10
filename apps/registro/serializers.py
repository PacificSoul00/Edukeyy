from rest_framework import serializers
from .models import *

class RegistroSerializers(serializers.ModelSerializer):
    class Meta:
        model=DjangoRegistro
        fields=[
            'cod_registro',
            'uid',
            'fecha_registro',
            'cod_aula',
            'rut',
            'fecha_reg',
            'estado_reg',
        ]
