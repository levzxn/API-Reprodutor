const getMusicas =  async (url) => {
    const conexao = await fetch(url)
    const musicas = await conexao.json()
    return musicas
}

export { getMusicas }