import { useState } from 'react'
import './Volume.css'
import { FaVolumeDown, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const Volume = ({ audioAtual }) => {
    const [volume, setVolume] = useState(0.5)

    const alterarVolume = (evento) => {
        const volumeAtual = Number(evento.target.value)
        setVolume(volumeAtual)
        audioAtual.volume = volumeAtual
        return volumeAtual
    }

    return (
        <>
            <div className='icone_volume'>
                {volume === 0 ? <FaVolumeMute />
                    : volume <= 0.5 ?
                        <FaVolumeDown />
                        : volume > 0.5 &&
                        <FaVolumeUp />}
            </div>
            <input type='range' min="0" max="1" step="0.01" value={volume} onChange={(evento) => alterarVolume(evento)}></input>
        </>

    )
}

export default Volume