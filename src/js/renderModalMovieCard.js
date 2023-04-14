export default function renderModalFilmCardMarkup(item){
    return `
    <div class="modal-poster-box">
      <img class="modal-img"
        id="${item.id}"
        src="https://image.tmdb.org/t/p/w500${item.poster_path}" 
        alt="${item.original_title}"/>
    </div>

    <div class="modal-info-box">
        <div class="modal-info-wrapper">

        <h2 class="movie-title">${item.original_title}</h2>
        <p class="movie-about-info">
        Vote/Votes: 
        <span class="vote-average">${(item.vote_average).toFixed(1)}</span>
        <span>/${item.vote_count}</span>
        </p>
        <p class="movie-about-info">Popularity: <span>${(item.popularity).toFixed(1)}</span></p>
        <p class="movie-about-info">Original Title: <span>${item.original_title}</span></p>
        <p class="movie-about-info">Genre: <span>Western</span></p>
        <h3 class="subtitle">About</h3>
        <p class="movie-overview">${item.overview}</p>

        </div>

        <div class="btn-box">
        <button class="modal-btn" data-action="watched">Add to watched</button>
        <button class="modal-btn" data-action="queued">Add to queued</button>
        </div>
    </div>`
};