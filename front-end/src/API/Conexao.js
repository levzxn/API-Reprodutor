const getMusicas =  async () => {
    const conexao = await fetch('https://127.0.0.1/musicas')
    const musicas = await conexao.json()
    return musicas
}

export { getMusicas }