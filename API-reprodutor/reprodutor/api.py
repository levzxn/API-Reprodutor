from ninja import NinjaAPI
from .models import Musica
from django.shortcuts import get_object_or_404
import requests

urlServidor = 'http://127.0.0.1:8000'

def getLetra(musica,artista):
    musicaFormatada = musica.replace(' ','-')
    artistaFormatado =artista.replace(' ','-')
    key = '515b97b70d2edaa68b1cf63d47826967'
    query = requests.get(f'http://api.musixmatch.com/ws/1.1/track.search?q_track={musicaFormatada}&q_artist={artistaFormatado}&apikey={key}').json()
    idMusica  = query['message']['body']['track_list'][0]['track']['track_id']
    letraQuery = requests.get(f'http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id={idMusica}&apikey={key}').json()
    letra =letraQuery['message']['body']['lyrics']['lyrics_body']
    return letra

api = NinjaAPI()

@api.get('musicas/')
def musica(request):
    musicas = Musica.objects.all()
    jsonMusicas = [{'titulo': i.titulo, 'audio': urlServidor + i.audio.url,'capa':urlServidor + i.capa.url,'duracao':i.duracao_formatada, 'artista':i.artista,'letra':getLetra(i.titulo,i.artista)} for i in musicas]
    return jsonMusicas

@api.get('musica/{id}')
def musicaId(request,id:int):
    musica = get_object_or_404(Musica,id=id)
    jsonMusica = {'titulo':musica.titulo,'audio': urlServidor + musica.audio.url,'capa':urlServidor + musica.capa.url,'duracao':musica.duracao_formatada,'artista':musica.artista}
    return jsonMusica

