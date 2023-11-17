from django.contrib import admin
from .models import *

class RegistroDjangoSolicitud(admin.ModelAdmin):
    list_display = ('tema','rut_alumno','rut_profesor','fecha_creacion','descripcion','razon','tipo_respuesta')
    list_display_links = ('rut_alumno',)
    list_per_page = 25

admin.site.register(DjangoSolicitud, RegistroDjangoSolicitud)
# Register your models her