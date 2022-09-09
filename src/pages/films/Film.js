import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleFilm } from "../../services/generalService";
import SingleCardMovie from "../../components/SingleCardMovie";
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