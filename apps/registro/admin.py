from django.contrib import admin
from .models import DjangoRegistro

class RegistroAdmin(admin.ModelAdmin):
    list_display = ('uid', 'fecha_reg')
admin.site.register(DjangoRegistro, RegistroAdmin)