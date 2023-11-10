from django.db import models
# Create your models here.
class VarcharField(models.Field):
    def db_type(self, connection):
        return 'varchar(8)'
class DjangoRegistro(models.Model):
    class Meta:
        verbose_name='registro'
        verbose_name_plural='registros'

    cod_registro = models.AutoField(primary_key=True,unique=True,default=0)
    uid = VarcharField()
    ##id_asignatura = models.IntegerField(max_length=10)
    ##cod_aula = models.CharField(max_length=10)
    ##rut = models.CharField(max_length=10)
    fecha_reg = models.DateTimeField(default=None, null=True)
    ##estado_reg = models.BooleanField(default=False)

    def __str__(self):
        return self.uid
    
    