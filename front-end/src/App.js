import { useEffect, useState } from 'react';
import './App.css';
import Reprodutor from './Componentes/Reprodutor';
import { getMusicas } from './API/Conexao';

function App() {
  
  const [listaReproducao, setListaReproducao] = useState(null)

  useEffect(() =>{
    const fetchMusicas = async () =>{
      const musicas =  await getMusicas()
      return musicas
    }
    setListaReproducao(fetchMusicas())
  }, [])

  return(
    listaReproducao.map((musica) => {
      return(
        <Reprodutor url={musica.url} nome={musica.nome}></Reprodutor>
      )
    })
  )
}

export default App;
