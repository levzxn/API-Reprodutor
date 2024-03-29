import { useEffect } from "react"
import { useState } from "react"
import './BarraProgresso.css'

const BarraProgresso = ({ porcentagem, tempoAudio, duracaoTotal }) => {
    const [porcentagemBarra, setPorcentagem] = useState(0)
    const [tempo, setTempo] = useState(0)
    const [duracao, setDuracao] = useState(0)


    

    useEffect(() => {
        const atualizarPorcentagem = () => {
            setPorcentagem(porcentagem)
        }
        const atualizarTempo = () =>{
            setTempo(tempoAudio)
        }
        const atualizarDuracao = () => {
            setDuracao(duracaoTotal)
        }
        atualizarPorcentagem()
        atualizarTempo()
        atualizarDuracao()
    }, [duracaoTotal, porcentagem, tempoAudio])


    return (
        <div className="barra-progresso">
            <p>{tempo}</p> 
            <div style={{ width: '70%', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
                <div
                    style={{
                        width: `${porcentagemBarra}%`,
                        height: '5px',
                        backgroundColor: 'white',
                        borderRadius:'5px'
                    }} />
            </div>
            <p>{duracao}</p>
        </div>

    )
}

export default BarraProgresso