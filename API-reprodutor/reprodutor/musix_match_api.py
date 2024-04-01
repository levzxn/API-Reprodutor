import requests

def getLetra(musica,artista):
    musicaFormatada = musica.replace(' ','-')
    artistaFormatado =artista.replace(' ','-')
    key = '515b97b70d2edaa68b1cf63d47826967'
    query = requests.get(f'http://api.musixmatch.com/ws/1.1/track.search?q_track={musicaFormatada}&q_artist={artistaFormatado}&apikey={key}').json()
    idMusica  = query['message']['body']['track_list'][0]['track']['track_id']
    letraQuery = requests.get(f'http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id={idMusica}&apikey={key}').json()
    letra =letraQuery['message']['body']['lyrics']['lyrics_body']
    return letra