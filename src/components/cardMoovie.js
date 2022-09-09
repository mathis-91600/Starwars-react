import './cardMoovie.css'
import { Link } from 'react-router-dom'

function CardMoovie(props) {
    return(
        <div className="single-moovie">
            <div className="left-side-moovie">
                <img src={props.url} alt={props.title} />
            </div>
            <div className="right-side-moovie">
                <h3>{props.title}</h3>
                <p>{props.resume}</p>
                <p>{props.date}</p>
                <p>{props.director}</p>
                <Link to={`/film/${props.title}`}>view more details</Link>
            </div>
        </div>
    )
}

export  default CardMoovie