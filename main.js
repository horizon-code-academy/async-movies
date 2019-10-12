let movies = [];
let moviesNb = 0;
let pagesNb = 0;
const pageLength = 4;
let currentPage = 0;

const runderFilm = ({ _id, title, year, runtime, poster }) => (
    `       
       <div class="col-3 pb-3">
                <div class="card" >
                    ${poster ?
        `<img src="${poster}" class="card-img-top" alt="...">` :
        `<img src="assets/fallback.jpg" class="card-img-top" alt="...">`}
                    <div class="card-body">
                        <h5 class="card-title">${title || "Unknown title"}</h5>
                        <p class="card-text">
                            Year: ${year || "Unknown year"}<br/>
                            Duration : ${runtime || "Unknown duration"}.
                        </p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-danger" onclick="deleteMovie('${_id}')">Delete</button> 
                    </div>
                </div>
        </div>
    `
);

const fetchFilmFromAPI = async () => {
    const response = await fetch('http://localhost:3000/films/' + (1 + currentPage));
    const content = await response.json();
    movies = content.docs;
    moviesNb = content.total;
    pagesNb = content.pages;
    showPage()
};

function next() {
    if (currentPage < pagesNb - 1)
        currentPage++
    fetchFilmFromAPI()
    showPage(movies, currentPage)
    document.querySelector('#pageNb').innerHTML = `Page ${currentPage + 1}`;
}

function prev() {
    if (currentPage > 0)
        currentPage--
    fetchFilmFromAPI()
    showPage(movies, currentPage)
    document.querySelector('#pageNb').innerHTML = `Page ${currentPage + 1}`;
}

const showPage = () => {
    document.querySelector('.row').innerHTML = movies.map(movies => runderFilm(movies)).join('');
}

fetchFilmFromAPI();

async function deleteMovie(id) {
    await fetch('http://localhost:3000/film/' + id, {
        method: 'DELETE'
    });
    fetchFilmFromAPI()
}