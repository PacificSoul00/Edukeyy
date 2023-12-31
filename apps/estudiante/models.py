from django.db import models

class VarcharField(models.Field):
    def db_type(self, connection):
        return 'varchar(%s)' % self.max_length

class DjangoEstudiante(models.Model):
    class Meta:
        verbose_name='estudiante'
        verbose_name_plural='estudiantes'

    uid = VarcharField(max_length=8,unique=True, primary_key=True)
    rut_al = models.CharField(max_length=10, default='0')
    nom_al = models.CharField(max_length=50)
    app_alumno = models.CharField(max_length=50)
    apm_alumno = models.CharField(max_length=50)

    def __str__(self):
        return self.nom_al
    
    