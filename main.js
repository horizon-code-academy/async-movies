const runderFilm = ({ Title, Year, Runtime, Poster }) => (
    `       
       <div class="col-4 pb-3" style="40px">
                <div class="card" >
                    <img src="${Poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${Title}</h5><br/>
                        <p class="card-text"> Year : ${Year}.</p>
                        <p class="card-text">Duration : ${Runtime}.</p>
                        <a href="${Poster}" class="btn btn-primary">Go movies</a>
                    </div>
                </div>
        </div>
    `
);
//const filmes=[...film,...film]
const fetchFilmFromAPI = async () => {
    const response = await fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
    const data = await response.json();
    document.querySelector('.row').innerHTML = data.map(movies => runderFilm(movies)).join('');
    /*$('.row').pagination({
        dataSource: 'https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies=?',
        locator: 'items',
        totalNumber: 5,
        pageSize: 3,
        ajax: {
            beforeSend: function() {
                dataContainer.html('Loading data from flickr.com ...');
            }
        },
        callback: function(data, pagination) {
            // template method of yourself
            var html = template(data);
            dataContainer.html(html);
        }
    })*/
};

fetchFilmFromAPI();