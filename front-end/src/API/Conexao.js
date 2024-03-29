const getMusicas =  async () => {
    const conexao = await fetch('http://127.0.0.1:8000/api/musicas/')
    const musicas = await conexao.json()
    return musicas
}


const key = 'a27e2f0b96c761592dac5a5668183c30'
const getLetrasMusicas = async (nomeArtista, musica) =>{
    const nomeArtistaFormatado = nomeArtista.trim().replace(/\s+/g, '-');
    const musicaFormatada = musica.trim().replace(/\s+/g, '-');
    const conexao = await fetch(`https://api.vagalume.com.br/search.php?art=${nomeArtistaFormatado}&mus=${musicaFormatada}&apikey=${key}`)
    const letra = await conexao.json()
    const letraFormatada = letra.mus[0].text
    return letraFormatada
}

export { getMusicas, getLetrasMusicas }