# Generated by Django 4.2.6 on 2023-10-18 02:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registro', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='djangoregistro',
            name='uid',
            field=models.CharField(max_length=10),
        ),
    ]