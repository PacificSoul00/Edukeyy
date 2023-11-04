from django.db import models
# Create your models here.
class VarcharField(models.Field):
    def db_type(self, connection):
        return 'varchar(10)'
class DjangoRegistro(models.Model):
    class Meta:
        verbose_name='registro'
        verbose_name_plural='registros'

    cod_registro = models.AutoField(primary_key=True,unique=True,default=0)
    uid = VarcharField()
    fecha_registro = models.DateTimeField(default=None, null=True)

    def __str__(self):
        return self.uid
    
    