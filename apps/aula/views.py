from rest_framework import viewsets
from .models import DjangoAula
from .serializers import DjangoAulaSerializer
from rest_framework import permissions
from rest_framework.views import APIView  
from rest_framework.response import Response

class DjangoAulaView(viewsets.ModelViewSet):
    
    serializer_class = DjangoAulaSerializer
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        cod_aula = self.request.query_params.get('cod_aula', None)
        if cod_aula is not None:
            queryset = DjangoAula.objects.filter(cod_aula=cod_aula)
        else:
            queryset = DjangoAula.objects.all()
        return queryset
