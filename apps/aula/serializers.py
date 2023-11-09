from rest_framework import serializers
from .models import *

class DjangoAulaSerializer(serializers.ModelSerializer):
    class Meta:
        model=DjangoAula
        fields=[
            'cod_aula',
        ]
