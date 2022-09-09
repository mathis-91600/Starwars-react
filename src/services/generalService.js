import axios from "axios";

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