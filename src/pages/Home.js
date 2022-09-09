import { useState, useEffect } from 'react';
import CardMoovie from '../components/cardMoovie';
import './home.css';
import { getFilmInfo } from '../services/generalService';
import film1 from '../images/films/film1.jpg'
import film2 from '../images/films/film2.jpg'
import film3 from '../images/films/film3.jpg'
import film4 from '../images/films/film4.jpg'
import film5 from '../images/films/film5.jpg'
import film6 from '../images/films/film6.jpg'

const Home = () => {
    const [movieInfos, setMovieInfos] = useState([])

    useEffect(() => {
        getFilmInfo().then((res) => {
            setMovieInfos(res.data.results)
        })
      }, [])
    
    const moviePhoto = 
    [
        {0: film4},
        {1: film5},
        {2: film6},
        {3: film1},
        {4: film2},
        {5: film3},
    ]

    return(
    <div>
        <div className="main-star-wars">
            <h2>Star Wars</h2>
        </div>
        <div className='moovie-star-wars'>
        {movieInfos
            ? movieInfos.map((movieInfo, i) => {
                console.log(movieInfo.episode_id);
                return(
                    <CardMoovie
                        url={moviePhoto[i][i]}
                        title={movieInfo.title}
                        resume={movieInfo.opening_crawl}
                        date={movieInfo.release_date}
                        director={movieInfo.director}
                        link={movieInfo.episode_id}
                        key={i}
                    />
                )
            })
        : null}
        </div>
    </div>
    
    )
}

export default Home