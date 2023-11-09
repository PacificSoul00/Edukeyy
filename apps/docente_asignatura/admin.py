from django.contrib import admin
from .models import *

class DocenteAsignaturaAdmin(admin.ModelAdmin):
    list_display = ('rut','sigla_asignatura','seccion')
    list_display_links = ('rut',)
    list_per_page = 25

admin.site.register(DocenteAsignatura, DocenteAsignaturaAdmin)
# Register your models here.
