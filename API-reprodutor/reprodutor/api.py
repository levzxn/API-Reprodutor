from ninja import NinjaAPI
from .models import Musica

api = NinjaAPI()

@api.get('musicas/')
def musica(request):
    musicas = Musica.objects.all()
    jsonMusicas = [{'titulo':i.titulo,'audio':i.audio} for i in musicas]
    return jsonMusicas