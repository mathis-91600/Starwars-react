import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleFilm } from "../../services/generalService";
import SingleCardMovie from "../../components/SingleCardMovie";
import film1 from '../../images/films/film1.jpg'
import film2 from '../../images/films/film2.jpg'
import film3 from '../../images/films/film3.jpg'
import film4 from '../../images/films/film4.jpg'
import film5 from '../../images/films/film5.jpg'
import film6 from '../../images/films/film6.jpg'
import './Film.css'

const Film = () => {

    const [singleFilm, setSingleFilm] = useState()

    let params = useParams();
    console.log(params)
    
    useEffect(() => {
        getSingleFilm(params.id).then((res) => {
            setSingleFilm(res.data)
        })
      }, [])

    return(
        <div className="all-information">
        {singleFilm
            ? 
            <SingleCardMovie
                title={singleFilm.title}
                resume={singleFilm.opening_crawl}
                director={singleFilm.director}
                producer={singleFilm.producer}
            />
        : null}
        </div>
    )
}
export default Film