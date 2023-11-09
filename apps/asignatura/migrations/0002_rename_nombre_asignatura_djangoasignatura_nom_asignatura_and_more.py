# Generated by Django 4.2.7 on 2023-11-09 20:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asignatura', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='djangoasignatura',
            old_name='nombre_asignatura',
            new_name='nom_asignatura',
        ),
        migrations.RenameField(
            model_name='djangoasignatura',
            old_name='rut_profesor',
            new_name='sigla_asignatura',
        ),
        migrations.RemoveField(
            model_name='djangoasignatura',
            name='id_asignatura',
        ),
        migrations.AddField(
            model_name='djangoasignatura',
            name='id',
            field=models.BigAutoField(auto_created=True, default=1, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='djangoasignatura',
            name='seccion',
            field=models.CharField(default=1, max_length=4),
            preserve_default=False,
        ),
    ]