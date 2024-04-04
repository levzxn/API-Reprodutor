import React, { useEffect, useState } from 'react';
import AudioPlayer from '../AudioPlayer';
import './Reprodutor.css';
import calcularCorMediaDaImagem from '../../Utils/imagemCor';
import { IoPauseCircle, IoPlayBackCircle, IoPlayCircle, IoPlayForwardCircle } from "react-icons/io5";

const Reprodutor = ({ listaReproducao }) => {
    const [estaReproduzindo, setEstaReproduzindo] = useState(false);
    const [indiceMusicaAtual, setIndiceMusicaAtual] = useState(0);
    const [corDeFundo, setCorDeFundo] = useState('');

    const proximaMusica = () => {
        setIndiceMusicaAtual((indiceAnterior) => (indiceAnterior + 1) % listaReproducao.length); 
    };

    const musicaAnterior = () => {
        setIndiceMusicaAtual((indiceAtual) => indiceAtual - 1 < 0 ? listaReproducao.length - 1 : indiceAtual - 1); 
    };

    const alternarReproducao = () => {
        setEstaReproduzindo(!estaReproduzindo);
    };

    useEffect(() => {
        const alterarCor = async () => {
            const cor = await calcularCorMediaDaImagem(listaReproducao[indiceMusicaAtual].capa); 
            setCorDeFundo(cor); 
        };
        alterarCor();
    }, [indiceMusicaAtual, listaReproducao]);

    return (
        <section style={{ backgroundColor: corDeFundo, opacity: 0.9 }}>
            <div className='reprodutor'>
                <div className='infos'>
                    <img src={listaReproducao[indiceMusicaAtual].capa} alt="Capa da música" />
                    <h1>{listaReproducao[indiceMusicaAtual].titulo}</h1>
                    <h3>{listaReproducao[indiceMusicaAtual].artista}</h3>
                </div>
                <div className='letra'>
                    <p className='paragrafo_letra'>{listaReproducao[indiceMusicaAtual].letra}</p>
                </div>
            </div>
            <div className="controls">
                <i onClick={musicaAnterior}><IoPlayBackCircle /></i>
                <i onClick={alternarReproducao}>{estaReproduzindo ? <IoPauseCircle className='play-pause' /> : <IoPlayCircle className='play-pause' />}</i>
                <i onClick={proximaMusica}><IoPlayForwardCircle /></i>
            </div>
            <AudioPlayer
                audioUrl={listaReproducao[indiceMusicaAtual].audio}
                aoAcabar={proximaMusica}
                reproduzindoAgora={estaReproduzindo}/>
        </section>
    );
};

export default Reprodutor;