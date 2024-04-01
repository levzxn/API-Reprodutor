from ninja import NinjaAPI
from .models import Musica
from django.shortcuts import get_object_or_404
from .musix_match_api import getLetra

urlServidor = 'http://127.0.0.1:8000'



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

