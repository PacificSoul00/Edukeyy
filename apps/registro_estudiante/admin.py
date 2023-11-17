from django.contrib import admin
from .models import *

class RegistroEstudianteAdmin(admin.ModelAdmin):
    list_display = ('id_registro_estudiante','uid','id_asignatura','cod_aula','rut','fecha_reg','estado_reg')
    list_display_links = ('uid',)
    list_per_page = 25

admin.site.register(DjangoRegistroEstudiante, RegistroEstudianteAdmin)
# Register your models here.
