# Generated by Django 4.2.7 on 2023-11-09 20:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('estudiante', '0002_alter_djangoestudiante_uid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='djangoestudiante',
            name='rut_al',
            field=models.CharField(default='0', max_length=10),
        ),
    ]
