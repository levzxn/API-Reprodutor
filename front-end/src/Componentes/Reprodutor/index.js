
import React, { useEffect, useState } from 'react'
import AudioPlayer from '../AudioPlayer'
import './Reprodutor.css'
import { IoPauseCircle, IoPlayBackCircle, IoPlayCircle, IoPlayForwardCircle } from "react-icons/io5";
import calcularCorMediaDaImagem from '../../Utils/imagemCor';

const Reprodutor = ({ listaReproducao }) => {
    const [reproduzindoAgora, setReproduzindoAgora] = useState(false)
    const [musicaAtual, setMusicaAtual] = useState(0)
    const [cordaSection, setCordaSection] = useState('')

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
        alterarCor()
    }, [cordaSection, listaReproducao, musicaAtual])

    return (
        <section style={{ backgroundColor: cordaSection, opacity: 0.9 }}>
            <div className='reprodutor'>
                <div className='infos'>
                    <img src={listaReproducao[musicaAtual].capa} alt="Capa da música" />
                    <h1>{listaReproducao[musicaAtual].titulo}</h1>
                    <h3>{listaReproducao[musicaAtual].artista}</h3>
                </div>
                <div className='letra'>
                    <p>{listaReproducao[musicaAtual].letra}</p>
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
