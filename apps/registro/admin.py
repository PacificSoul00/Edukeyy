from django.contrib import admin
from .models import DjangoRegistro

class RegistroAdmin(admin.ModelAdmin):
    list_display = ('cod_registro', 'uid', 'cod_aula','id_asignatura', 'rut', 'fecha_reg', 'estado_reg')
admin.site.register(DjangoRegistro, RegistroAdmin)