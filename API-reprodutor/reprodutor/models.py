from django.db import models

class Musica(models.Model):
    titulo = models.CharField(max_length=50)
    audio = models.FileField()
    capa = models.ImageField(blank=True)
