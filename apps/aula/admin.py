from django.contrib import admin
from .models import *

class AulaAdmin(admin.ModelAdmin):
    list_display = ('cod_aula',)
    list_display_links = ('cod_aula',)
    list_per_page = 25

admin.site.register(DjangoAula, AulaAdmin)
# Register your models here.
