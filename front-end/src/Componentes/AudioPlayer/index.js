import React, { useEffect, useRef, useState } from 'react';
import BarraProgresso from '../BarraProgresso';

const AudioPlayer = ({ audioUrl, aoAcabar, reproduzindoAgora }) => {
  const audioRef = useRef(null);
  const [tempo, setTempo] = useState(0);
  const [duracao, setDuracao] = useState(0);

  useEffect(() => {
    if (reproduzindoAgora) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [reproduzindoAgora]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setTempo(audioRef.current.currentTime);
    };
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
  }, []);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setTempo(audioRef.current.currentTime);
      setDuracao(audioRef.current.duration);
    };

    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

  }, []);

  const calcularPorcentagemConclusao = () => {
    if (duracao === 0) {
      return 0
    };
    return (tempo / duracao) * 100;
  };

  useEffect(() => {
    if (reproduzindoAgora) {
      audioRef.current.play();
    }
  }, [audioUrl, reproduzindoAgora]);

  const formatarTempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = Math.floor(segundos % 60);
    return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
  };


  return (
    <>
      <BarraProgresso porcentagem={calcularPorcentagemConclusao} tempoAudio={formatarTempo(tempo)} duracaoTotal={formatarTempo(duracao)}/>
      <audio
        ref={audioRef}
        src={audioUrl}
        onEnded={aoAcabar}
      />
    </>
  );
};

export default AudioPlayer;
