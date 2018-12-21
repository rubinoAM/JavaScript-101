const apiBaseUrl = 'http://api.themoviedb.org/3';
const imageBaseUrl = 'http://image.tmdb.org/t/p/';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;

$.getJSON(nowPlayingUrl,(movieData)=>{
    //console.log(movieData);
    movieData.results.forEach((movie)=>{
        const posterUrl = `${imageBaseUrl}w300${movie.poster_path}`;
        const newHTML = `
            <div class="col-4">
                <img src="${posterUrl}" />
                ${movie.title}
            </div>
        `;
        $('#movie-grid').append(newHTML);
    });
})

$('#movie-form').submit(()=>{
    event.preventDefault();
    const movieSearch = $('#search-input').val();
    const searchUrl = `${apiBaseUrl}/search/movie?api_key=${apiKey}&query=${movieSearch}`;
    let newHTML = '';
    $.getJSON(searchUrl,(movieData)=>{
        movieData.results.forEach((movie)=>{
            const posterUrl = `${imageBaseUrl}w300${movie.poster_path}`;
            newHTML += `
                <div class="col-3">
                    <img src="${posterUrl}" />
                    ${movie.title}
                </div>
            `;
            $('#movie-grid').html(newHTML);
        });
    });
});