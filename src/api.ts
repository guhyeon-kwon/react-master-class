const API_KEY = "c6f794c37da4cec2b150abc38c697672";
const BASE_PATH = "https://api.themoviedb.org/3/";

export function getMovies(){
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(response => response.json())
}