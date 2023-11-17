from django.db import models

class DjangoSolicitud(models.Model):
    class Meta:
        verbose_name='solicitud'
        verbose_name_plural='solicitudes'

    id_solicitud = models.AutoField(primary_key=True,unique=True)
    id_asignatura = models.IntegerField(default=None, null=True)
    tema = models.CharField(max_length=50)
    rut_alumno = models.CharField(max_length=10)
    rut_profesor = models.CharField(max_length=10)
    fecha_creacion = models.DateField(default=None, null=True)
    descripcion = models.CharField(max_length=500)
    razon = models.CharField(max_length=500, null=True)
    tipo_respuesta = models.IntegerField(default=None, null=True)
