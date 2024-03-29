from ninja import NinjaAPI
from .models import Musica


api = NinjaAPI()

@api.get('musicas/')
def musica(request):
    urlServidor = 'http://127.0.0.1:8000'
    musicas = Musica.objects.all()
    jsonMusicas = [{'titulo': i.titulo, 'audio': urlServidor + i.audio.url,'capa':urlServidor + i.capa.url} for i in musicas]
    return jsonMusicas