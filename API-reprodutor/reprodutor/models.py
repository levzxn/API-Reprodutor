from django.db import models
from mutagen.mp3 import MP3

class Musica(models.Model):
    titulo = models.CharField(max_length=50)
    audio = models.FileField(upload_to="audio/%Y/%m/%d",blank=True)
    capa = models.ImageField(upload_to="fotos/%Y/%m/%d",blank=True)

    def __str__(self) -> str:
        return self.titulo
    
    @property
    def duracao_audio(self):
        audio = MP3(self.audio)
        return int(audio.info.length)
    
    @property
    def duracao_formatada(self):
        segundos = self.duracao_audio
        horas = segundos // 3600
        minutos = (segundos % 3600) // 60
        segundos_restantes = segundos % 60

        if horas > 0:
            return f'{horas:02d}:{minutos:02d}:{segundos_restantes:02d}'
        elif minutos > 0:
            return f'{minutos:02d}:{segundos_restantes:02d}'
        else:
            return f'{segundos_restantes:02d}'