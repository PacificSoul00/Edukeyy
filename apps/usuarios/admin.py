from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import UsuarioPersonalizado

class UsuarioPersonalizadoAdmin(UserAdmin):
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'rut', 'password1', 'password2'),
        }),
    )
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Información personal', {'fields': ('rut', 'nombre', 'apellido', 'email')}),
        ('Permisos', {'fields': ('is_active', 'is_staff', 'is_superuser','user_permissions')}),
        ('Rol', {'fields': ('rol',)}),
    )

admin.site.register(UsuarioPersonalizado, UsuarioPersonalizadoAdmin)
