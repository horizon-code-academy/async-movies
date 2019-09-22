let movies = [];
let moviesNb = 0;
let pagesNb = 0;
const pageLength = 4;
let currentPage = 0;

const runderFilm = ({ Title, Year, Runtime, Poster }) => (
    `       
       <div class="col-3 pb-3">
                <div class="card" >
                    ${Poster ?
        `<img src="${Poster}" class="card-img-top" alt="...">` :
        `<img src="assets/fallback.jpg" class="card-img-top" alt="...">`}
                    <div class="card-body">
                        <h5 class="card-title">${Title || "Unknown title"}</h5>
                        <p class="card-text">
                            Year: ${Year || "Unknown year"}<br/>
                            Duration : ${Runtime || "Unknown duration"}.
                        </p>
                    </div>
                </div>
        </div>
    `
);

const fetchFilmFromAPI = async () => {
    const response = await fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
    const data = await response.json();
    movies = [...data, ...data, ...data, ...data, ...data, ...data];
    moviesNb = movies.length;
    pagesNb = Math.ceil(moviesNb / pageLength);
    showPage()
};

function next() {
    if(currentPage < pagesNb - 1)
    currentPage++
    showPage(movies, currentPage)
    document.querySelector('#pageNb').innerHTML = `Page ${currentPage + 1}`;
}

function prev() {
    if(currentPage > 0)
    currentPage--
    showPage(movies, currentPage)
    document.querySelector('#pageNb').innerHTML = `Page ${currentPage + 1}`;
}

const showPage = () => {
    const moviesOfPage = movies.slice(currentPage * pageLength, currentPage * pageLength + pageLength)
    document.querySelector('.row').innerHTML = moviesOfPage.map(movies => runderFilm(movies)).join('');
}

fetchFilmFromAPI();