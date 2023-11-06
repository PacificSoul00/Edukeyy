import hashlib
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password
from django.contrib.auth.models import User
from django.contrib.auth.backends import ModelBackend
from .models import UsuarioPersonalizado

class UserAuthentificacionBackend(object):
    def authenticate(self, request, username=None, password=None):
        try:
            user = UsuarioPersonalizado.objects.get(username=username)
            if user.check_password(password):
                return user
        except UsuarioPersonalizado.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return UsuarioPersonalizado.objects.get(pk=user_id)
        except UsuarioPersonalizado.DoesNotExist:
            return None