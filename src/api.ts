const API_KEY = "c6f794c37da4cec2b150abc38c697672";
const BASE_PATH = "https://api.themoviedb.org/3/";

interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}

export interface IGetMoviesResult {
    dates: {
        maxium: string;
        minimum: string;
    };
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export function getMovies(){
    return fetch(`${BASE_PATH}movie/now_playing?api_key=${API_KEY}&language=ko-KR`).then(response => response.json())
}