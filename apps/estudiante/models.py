from django.db import models

# Create your models here.
class DjangoEstudiante(models.Model):
    class Meta:
        verbose_name='estudiante'
        verbose_name_plural='estudiantes'

    uid = models.CharField(max_length=30,unique=True, primary_key=True)
    rut_al = models.CharField(max_length=50, default='0')
    nom_al = models.CharField(max_length=50)
    app_alumno = models.CharField(max_length=50)
    apm_alumno = models.CharField(max_length=50)

    def __str__(self):
        return self.nom_al
    
    