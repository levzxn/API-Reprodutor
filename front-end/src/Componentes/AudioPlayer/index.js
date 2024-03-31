import React, { useEffect, useRef, useState } from 'react'
import BarraProgresso from '../BarraProgresso'
import Volume from '../Volume';
import './AudioPlayer.css'

const AudioPlayer = ({ audioUrl, aoAcabar, reproduzindoAgora }) => {
  const audioRef = useRef(null)
  const [tempo, setTempo] = useState(0)
  const [duracao, setDuracao] = useState(0)

  useEffect(() => {
    if (reproduzindoAgora) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [reproduzindoAgora])

  useEffect(() => {
    const handleTimeUpdate = () => {
      setTempo(audioRef.current.currentTime)
      setDuracao(audioRef.current.duration)
    };
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
  }, [])

  useEffect(() => {
    if (reproduzindoAgora) {
      audioRef.current.play()
    }
  }, [audioUrl, reproduzindoAgora])

  const calcularPorcentagemConclusao = () => {
    if (duracao === 0) {
      return 0
    };
    return (tempo / duracao) * 100
  };


  const formatarTempo = (segundos) => {
    const minutos = Math.floor(segundos / 60)
    const segundosRestantes = Math.floor(segundos % 60)
    return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`
  };


  return (
    <div className='container'>
      <div className='container_barra'>
        <BarraProgresso porcentagem={calcularPorcentagemConclusao} tempoAudio={formatarTempo(tempo)} duracaoTotal={duracao ? formatarTempo(duracao) : '00:00'} />
        <audio
          ref={audioRef}
          src={audioUrl}
          onEnded={aoAcabar} />
      </div>
      <div className='barra-volume'>
        <Volume audioAtual={audioRef.current ? audioRef.current : ''}></Volume>
      </div>
    </div>

  );
};

export default AudioPlayer
