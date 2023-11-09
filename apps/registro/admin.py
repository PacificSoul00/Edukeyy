from django.contrib import admin
from .models import DjangoRegistro

class RegistroAdmin(admin.ModelAdmin):
    list_display = ('cod_registro', 'uid', 'cod_aula', 'rut', 'fecha_reg', 'estado_reg')
    exclude = ('created_at', 'updated_at','last_login','password')
admin.site.register(DjangoRegistro, RegistroAdmin)