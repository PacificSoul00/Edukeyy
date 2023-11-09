# Generated by Django 4.2.6 on 2023-11-09 22:13

import apps.registro.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registro', '0003_alter_djangoregistro_uid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='djangoregistro',
            name='fecha_registro',
        ),
        migrations.AddField(
            model_name='djangoregistro',
            name='cod_aula',
            field=models.CharField(default=1, max_length=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='djangoregistro',
            name='estado_reg',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='djangoregistro',
            name='fecha_reg',
            field=models.DateField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='djangoregistro',
            name='id_asignatura',
            field=models.IntegerField(default=1, max_length=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='djangoregistro',
            name='rut',
            field=models.CharField(default=1, max_length=10),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='djangoregistro',
            name='uid',
            field=apps.registro.models.VarcharField(max_length=8),
        ),
    ]