# Generated by Django 4.2.6 on 2023-11-03 18:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DjangoAsignatura',
            fields=[
                ('id_asignatura', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_asignatura', models.CharField(max_length=50)),
                ('rut_profesor', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'asignatura',
                'verbose_name_plural': 'asignaturas',
            },
        ),
    ]
