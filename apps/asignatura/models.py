from django.db import models

# Create your models here.
class DjangoAsignatura(models.Model):
    class Meta:
        verbose_name='asignatura'
        verbose_name_plural='asignaturas'
        
    id = models.BigAutoField(primary_key=True) ### Id autoincremental
    sigla_asignatura = models.CharField(max_length=10)
    nom_asignatura = models.CharField(max_length=100)
    seccion = models.CharField(max_length=10)

    def __str__(self):
        return self.nom_asignatura
    