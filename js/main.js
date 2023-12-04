import MoviesAPI from "../movies-api/movies-api-class.js";

const eventHandler = () => {
    document.addEventListener(`DOMContentLoaded`, e => {
        const moviesContainer = document.querySelector(`.moviesContainer`);
        const loadingContainer = document.querySelector(`.loadingContainer`);
        loadingContainer.style.display = `block`;
        const loadingAnimation = document.getElementById('loadingAnimation');
        loadingAnimation.style.display = 'block';
        /** code that fetches movies */
        loadingContainer.style.display = `none`;
        loadingAnimation.style.display = 'none';
        /** code that creates movie cards/elements */
    });
    const addMovieBtn = document.querySelector(`.addMovieBtn`);
    const addMovieForm = document.querySelector(`.addMovieForm`)
    const titleInput = document.querySelector(`#title`);
    const ratingInput = document.querySelector(`#rating`);
    addMovieBtn.addEventListener(`click`, e => {
        addMovieForm.classList.remove(`hide`);
        titleInput.setAttribute(`required`, ``);
        ratingInput.setAttribute(`required`, ``);
    });
    const submitMovieBtn = document.querySelector(`#submitMovieBtn`);
    submitMovieBtn.addEventListener(`click`, e => {
        e.preventDefault();
        /** logic that posts movie to json */
        addMovieForm.classList.add(`hide`);
    });
    const exitFormBtn = document.querySelector(`#formExit`);
    exitFormBtn.addEventListener(`click`, e => {
        e.preventDefault();
        addMovieForm.classList.add(`hide`);
        titleInput.removeAttribute(`required`);
        ratingInput.removeAttribute(`required`);
    });
    const updateMovieBtn = document.querySelector(`#updateMovieBtn`);
    updateMovieBtn.addEventListener(`click`, e => {
        e.preventDefault();
        const movieId = document.querySelector(`#movieId`).value;
        const editedTitle = document.querySelector(`.editTitle`).value;
        const editedRating = document.querySelector(`#editTitle`).value;
        /** fetch request using put or patch */
    });
}

const movieData = {
    genres: ['Action', 'Drama'],
    id: 12345,
    overview: 'A great movie overview',
    release_date: '2023-01-01',
    title: 'Test Movie',
    vote_average: 8.5
};

(async () => {
    eventHandler();
    const firstMovie = await new MoviesAPI().getMovies();
    console.log(firstMovie)
})();