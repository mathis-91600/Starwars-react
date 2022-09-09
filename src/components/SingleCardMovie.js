import './SingleCardMovie.css'
import { useParams } from "react-router-dom";

const SingleCardMovie = (props) => {
    let params = useParams();
   console.log(params);

    return(
        <div className="single-movie-card">
            <h2>{props.title}</h2>
            <p className='resume'>{props.resume}</p>
            <p className='director'>{props.director}</p>
            <p className='producer'>{props.producer}</p>
        </div>
    )
}

export default SingleCardMovie