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
    path('api/aula/', include('apps.aula.urls')),
    path('api/docente-asignatura/', include('apps.docente_asignatura.urls')),
    path('api/registro-estudiante/', include('apps.registro_estudiante.urls')),
    path('api/solicitudes/', include('apps.solicitud.urls')),
    path('admin/', admin.site.urls),
]