from django.contrib import admin
from .models import *

class AsignaturaAdmin(admin.ModelAdmin):
    list_display = ('nombre_asignatura','rut_profesor')
    list_display_links = ('nombre_asignatura',)
    list_per_page = 25

admin.site.register(DjangoAsignatura, AsignaturaAdmin)
# Register your models here.
