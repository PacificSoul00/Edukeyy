from django.db import models

# Create your models here.
class DjangoAsignatura(models.Model):
    class Meta:
        verbose_name='asignatura'
        verbose_name_plural='asignaturas'

    id_asignatura = models.AutoField(primary_key=True)
    nombre_asignatura = models.CharField(max_length=50)
    rut_profesor = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre_asignatura
    
    