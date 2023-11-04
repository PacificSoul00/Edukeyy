from django.contrib import admin
from .models import *

class EstudianteAdmin(admin.ModelAdmin):
    list_display = ('uid','rut_al','nom_al','app_alumno','apm_alumno',)
    list_display_links = ('uid',)
    list_per_page = 25

admin.site.register(DjangoEstudiante, EstudianteAdmin)
# Register your models here.
