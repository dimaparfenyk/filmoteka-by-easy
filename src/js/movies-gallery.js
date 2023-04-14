import { refs } from "./services/references";
import api from "./services/fetch-movies";
import { renderPaginationMarkup } from "./pagination";

export async function fetchAndRenderMainPageContent(page){
 await api.fetchMovies(page)
  .then(({results, total_pages})=>{ 
  appendMarkup(refs.moviesGallery,results);
  renderPaginationMarkup(page, total_pages, 2);
  }
  );
};

fetchAndRenderMainPageContent(1);


function createMoviesGalleryMarkup(items){
  return  items.map(item=>`
    <li class="movie__item">
    <img 
    class="movie__image" 
    src="https://image.tmdb.org/t/p/w500${item.poster_path}" 
    alt="${item.title}"/>
    <h2 class="movie__name">${item.title}</h2>
    <div class="movie__info-box">
    <p class="movie__info">${item.vote_average.toFixed(1)}</p>
    <p class="movie__info">${item.release_date}</p>
    </div>
    </li>`).join("")
};

export function appendMarkup(selector,items){
    selector.insertAdjacentHTML('beforeend',  createMoviesGalleryMarkup(items))
}