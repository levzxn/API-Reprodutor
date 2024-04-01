const getMusicas =  async () => {
    const conexao = await fetch('http://127.0.0.1:8000/api/musicas/')
    const musicas = await conexao.json()
    return musicas
}


const key = '515b97b70d2edaa68b1cf63d47826967'
const getLetrasMusicas = async (nomeArtista, musica) =>{
    const nomeArtistaFormatado = nomeArtista.trim().replace(/\s+/g, '-');
    const musicaFormatada = musica.trim().replace(/\s+/g, '-');
    const query = await fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${musicaFormatada}&q_artist=${nomeArtistaFormatado}&apikey=${key}`)
    const resultQuery = await query.json()
    console.log(resultQuery)
    const idMusica  = resultQuery['message']['body']['track_list'][0]['track']['track_id']
    const getLetra = await fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${idMusica}&apikey=515b97b70d2edaa68b1cf63d47826967`)
    const resultLetra = await getLetra.json()
    const letra = resultLetra['message']['body']['lyrics']['lyrics_body']
    return letra
}

export { getMusicas, getLetrasMusicas }