from django.db import models
from django.contrib.auth.models import AbstractUser

class Rol(models.TextChoices):
    ADMINISTRADOR = '1', 'Administrador'
    DOCENTE = '2', 'Docente'
    DIRECTOR_DE_CARRERA = '3', 'Director de Carrera'

class UsuarioPersonalizado(AbstractUser):
    rut = models.CharField(max_length=10, unique=True)
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    rol = models.CharField(max_length=2, choices=Rol.choices, default=Rol.ADMINISTRADOR)
# Create your models here.
