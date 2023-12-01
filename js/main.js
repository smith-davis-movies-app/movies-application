import {keys} from "./keys.js";


    const getMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/157336?api_key=${keys.movies}&append_to_response=videos,images';
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }