from django.contrib import admin
from .models import *

class AsignaturaAdmin(admin.ModelAdmin):
    list_display = ('sigla_asignatura','nom_asignatura','seccion')
    list_display_links = ('nom_asignatura',)
    list_per_page = 25

admin.site.register(DjangoAsignatura, AsignaturaAdmin)
# Register your models here.
