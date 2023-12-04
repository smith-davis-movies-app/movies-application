import {keys} from "./keys.js";

class Hamburger {
    constructor() {
        this.apiKey = keys.movies;
        this.base = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}`;
    }
    async getGenre(movieData) {
        const newMovie = {
            ...movieData
        };
        const body = JSON.stringify(newMovie);

        const url = `${this.base}discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`;
        const options = {
            method: "POST",
            headers: {
                accept: `application/json`,
                Authorization: `Bearer ${this.bearer}`,
            },
            body: body,
        };
        const response = await fetch(url, options);
        return await response.json();
    }
}