const runderFilm = ({ Title, Year, Runtime, Poster }) => (
    `       
       <div class="col-3 pb-3" style="40px">
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