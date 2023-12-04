import MoviesAPI from "../movies-api/movies-api-class.js";

class Movie {
    constructor(movie, target, moviesAPI) {
        this.moviesAPI = new MoviesAPI();
        this.title = movie.title;
        this.year = movie.year;
        this.genre = movie.genre;
        this.rating = movie.rating;
        this.description = movie.description
        this.element = this.render(target);
    }
    render(target, index) {
        const card = document.createElement(`div`);
        card.classList.add(`col`, `movieCard`);
        card.setAttribute(`id`, `${index}`)
        card.innerHTML = `
            <p>${this.title}</p>
            <p>${this.year}</p>
            <p>${this.genre}</p>
            <p>${this.rating}</p>
            <p>${this.description}</p>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn" data-id="${index}">Delete</button>
        `;

        const editBtn = document.querySelector(`#editBtn`);
        const editForm = document.querySelector(`#editForm`);
        editBtn.addEventListener(`click`, e => {
            editForm.classList.toggle(`hide`);
        });
        const deleteBtn = document.querySelector(`.deleteBtn`);
        deleteBtn.addEventListener(`click`, async (e) => {
            const buttonId = parseInt(e.target.getAttribute(`data-id`));

            /** delete button is disabled while request is pending */
            deleteBtn.disabled = true;
            await this.moviesAPI.deleteMovie(buttonId, deleteBtn);
        });

        target.appendChild(card);
        return card;
    }
}

export default Movie;