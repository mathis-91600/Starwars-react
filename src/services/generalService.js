import axios from "axios";
import { useParams } from "react-router-dom";

export function getFilmInfo()  {
    return axios
        .get(
            'https://swapi.dev/api/films'
        )
    .then((response) => response)
    .catch((err) => {
    console.log(err)
    })
}

export function getSingleFilm(id) {
    return axios
        .get(
            `https://swapi.dev/api/films/${id}`
        )
    .then((response) => response)
    .catch((err) => {
    console.log(err)
    })
}