import AudioPlayer from '../AudioPlayer'
import './Reprodutor.css'

const Reprodutor = (props) =>{
    return(
        <ul className='reprodutor'>
            <li>
                <img src={`http://127.0.0.1:8000${props.capa}`}></img>
                <AudioPlayer audioUrl={`http://127.0.0.1:8000${props.audio}`}></AudioPlayer>
            </li>
        </ul>

    )
}
export default Reprodutor