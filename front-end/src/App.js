import { useEffect, useState } from 'react';
import './App.css';
import Reprodutor from './Componentes/Reprodutor';
import { getMusicas } from './API/Conexao';

function App() {

  const [listaReproducao, setListaReproducao] = useState([])

  useEffect(() => {
    const fetchMusicas = async () => {
      const musicas = await getMusicas()
      setListaReproducao(musicas)
    }
    fetchMusicas()
  }, [])

  return (
    <main>
      <div className='container_musica'>
        {listaReproducao.map((musica) => {return <Reprodutor capa={musica.capa} audio={musica.audio} titulo={musica.titulo}></Reprodutor>})}
      </div>
    </main>
  )
}

export default App;
