const getMusicas =  async () => {
    const conexao = await fetch('http://127.0.0.1:8000/api/musicas/')
    const musicas = await conexao.json()
    return musicas
}

export { getMusicas}