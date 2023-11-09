from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('api/estudiante/', include('apps.estudiante.urls')),
    path('api/registro/', include('apps.registro.urls')),
    path('api/usuarios/', include('apps.usuarios.urls')),
    path('api/asignaturas/', include('apps.asignatura.urls')),
    path('admin/', admin.site.urls),
]