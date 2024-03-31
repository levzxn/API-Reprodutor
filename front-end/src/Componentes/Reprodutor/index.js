
import React, { useEffect, useState } from 'react'
import AudioPlayer from '../AudioPlayer'
import './Reprodutor.css'
import { IoPauseCircle, IoPlayBackCircle, IoPlayCircle, IoPlayForwardCircle } from "react-icons/io5";
import calcularCorMediaDaImagem from '../../Utils/imagemCor';
import { getLetrasMusicas } from '../../API/Conexao';

const Reprodutor = ({ listaReproducao }) => {
    const [reproduzindoAgora, setReproduzindoAgora] = useState(false)
    const [musicaAtual, setMusicaAtual] = useState(0)
    const [cordaSection, setCordaSection] = useState('')
    const [letraMusica, setLetraMusica] = useState('')

    const proximaMusica = () => {
        setMusicaAtual((indexAnterior) => (indexAnterior + 1) % listaReproducao.length)
    }

    const musicaAnterior = () => {
        setMusicaAtual((indexAnterior) => indexAnterior - 1 < 0 ? listaReproducao.length - 1 : indexAnterior - 1)
    }

    const setPlayPause = () => {
        setReproduzindoAgora(!reproduzindoAgora)
    }


    useEffect(() => {
        const alterarCor = async () => {
            const cor = await calcularCorMediaDaImagem(listaReproducao[musicaAtual].capa)
            setCordaSection(cor)

        }
        const carregarLetraMusica = async () => {
            const letraMusica = await getLetrasMusicas('Matuê', listaReproducao[musicaAtual].titulo)
            setLetraMusica(letraMusica)
        }
        carregarLetraMusica()
        alterarCor()
    }, [cordaSection, listaReproducao, musicaAtual])

    return (
        <section style={{ backgroundColor: cordaSection, opacity: 0.9 }}>
            <div className='reprodutor'>
                <div className='infos'>
                    <img src={listaReproducao[musicaAtual].capa} alt="Capa da música" />
                    <h1>{listaReproducao[musicaAtual].titulo}</h1>
                </div>
                <div className='letra'>
                    <p>{letraMusica}</p>
                </div>


            </div>
            <div className="controls">
                <i onClick={musicaAnterior}><IoPlayBackCircle /></i>
                <i onClick={setPlayPause}>{reproduzindoAgora ? <IoPauseCircle className='play-pause' /> : <IoPlayCircle className='play-pause' />}</i>
                <i onClick={proximaMusica}><IoPlayForwardCircle /></i>
            </div>
            <AudioPlayer
                audioUrl={listaReproducao[musicaAtual].audio}
                aoAcabar={proximaMusica}
                reproduzindoAgora={reproduzindoAgora}/>
        </section>
    )
};

export default Reprodutor
