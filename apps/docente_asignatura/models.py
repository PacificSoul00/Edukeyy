from django.db import models


class DocenteAsignatura (models.Model):
    rut = models.CharField(max_length=10)
    sigla_asignatura = models.CharField(max_length=10)
    seccion = models.CharField(max_length=10)

    def __str__(self):
        return self.rut
    