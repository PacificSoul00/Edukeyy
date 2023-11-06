from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from rest_framework.views import APIView 
from rest_framework import permissions
from django.http import JsonResponse
from rest_framework.authtoken.models import Token

from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from rest_framework.views import APIView 
from rest_framework import permissions
from rest_framework.authtoken.models import Token

class LoginView(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        if username and password:
            user = authenticate(request, username=username, password=password)
            if user is not None:
                token, created = Token.objects.get_or_create(user=user)
                return JsonResponse({'token': token.key,'rol':user.rol,'p_nombre':user.nombre,'s_nombre':user.apellido,'rut':user.rut}, status=200)
            else:
                return JsonResponse({'error': 'Credenciales incorrectas'}, status=400)
        else:
            return JsonResponse({'error': 'Faltan nombre de usuario o contraseña'}, status=400)

