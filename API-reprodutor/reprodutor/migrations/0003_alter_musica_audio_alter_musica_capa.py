# Generated by Django 5.0.3 on 2024-03-31 22:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reprodutor', '0002_musica_capa'),
    ]

    operations = [
        migrations.AlterField(
            model_name='musica',
            name='audio',
            field=models.FileField(blank=True, upload_to='audio/%Y/%m/%d'),
        ),
        migrations.AlterField(
            model_name='musica',
            name='capa',
            field=models.ImageField(blank=True, upload_to='fotos/%Y/%m/%d'),
        ),
    ]
