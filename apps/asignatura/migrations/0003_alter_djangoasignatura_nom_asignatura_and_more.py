# Generated by Django 4.2.7 on 2023-11-09 20:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asignatura', '0002_rename_nombre_asignatura_djangoasignatura_nom_asignatura_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='djangoasignatura',
            name='nom_asignatura',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='djangoasignatura',
            name='seccion',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='djangoasignatura',
            name='sigla_asignatura',
            field=models.CharField(max_length=10),
        ),
    ]
