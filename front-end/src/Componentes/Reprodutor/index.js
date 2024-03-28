import AudioPlayer from '../AudioPlayer'
import './Reprodutor.css'

const Reprodutor = (props) =>{
    return(
        <div className="reprodutor">
            <a href={props.url}>{props.nome}
                <AudioPlayer audioUrl={props.url}></AudioPlayer>
            </a>

        </div>
    )
}
export default Reprodutor