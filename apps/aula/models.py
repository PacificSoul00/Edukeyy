from django.db import models

# Create your models here.
class DjangoAula(models.Model):
    class Meta:
        verbose_name='aula'
        verbose_name_plural='aulas'
        
    cod_aula= models.CharField(primary_key=True, max_length=10)

    def __str__(self):
        return self.cod_aula
    