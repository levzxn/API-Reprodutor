import { useEffect, useState } from 'react';
import './App.css';
import Reprodutor from './Componentes/Reprodutor';
import { getMusicas } from './API/Conexao';

function App() { 
  const [listaReproducao, setListaReproducao] = useState([])


  useEffect(() => {
    const fetchMusicas = async () => {
      const musicas = await getMusicas();
      setListaReproducao(musicas);
    };
    fetchMusicas();
  }, []);
  
  return (
    <main>
      {listaReproducao.length > 0 && (
        <Reprodutor listaReproducao={listaReproducao}/>
      )}
    </main>
  );
}

export default App;