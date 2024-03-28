import React, { useState } from 'react';

const AudioPlayer = ({ audioUrl }) => {
  const [audioContext, setAudioContext] = useState(null);

  const carregarReproduzirAudio = () => {
    if (!audioContext) {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      setAudioContext(context);
      fetch(audioUrl)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
          const source = context.createBufferSource();
          source.buffer = audioBuffer;
          source.connect(context.destination);
          source.start(0);
        })
        .catch(error => console.error('Erro ao carregar e reproduzir áudio:', error));
    }
  };

  return (
    <div>
      <button onClick={carregarReproduzirAudio}>Reproduzir</button>
    </div>
  );
}

export default AudioPlayer;