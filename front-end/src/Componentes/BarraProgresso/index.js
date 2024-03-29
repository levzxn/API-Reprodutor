import { useEffect } from "react"
import { useState } from "react"
import './BarraProgresso.css'

const BarraProgresso = ({ porcentagem, tempoAudio, duracaoTotal }) => {
    const [porcentagemBarra, setPorcentagem] = useState(0)

    useEffect(() => {
        const atualizarPorcentagem = () => {
            setPorcentagem(porcentagem)
        }       
        atualizarPorcentagem()
    }, [porcentagem])


    return (
        <div className="barra-progresso">
            <p>{tempoAudio}</p> 
            <div style={{ width: '70%', backgroundColor: '#ccc' }}>
                <div
                    style={{
                        width: `${porcentagemBarra}%`,
                        height: '5px',
                        backgroundColor: 'green',
                    }} />
            </div>
            <p>{duracaoTotal}</p>
        </div>

    )
}

export default BarraProgresso