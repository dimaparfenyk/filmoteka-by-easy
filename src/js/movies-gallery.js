import { refs } from "./services/references";
import api from "./services/fetch-movies";
import { renderPaginationMarkup } from "./pagination";

export async function fetchAndRenderMainPageContent(page, fetch){
 await fetch(page)
  .then(({results, total_pages})=>{ 
  refs.moviesGallery.innerHTML=createMoviesGalleryMarkup(results)
  appendMarkup(refs.moviesGallery,results);
  renderPaginationMarkup(page, total_pages, 2);
  }
  );
};

fetchAndRenderMainPageContent(1, api.fetchMovies);

function createMoviesGalleryMarkup(items){
  return  items.map(item=>`
    <li class="movie__item">
    <img 
    id="${item.id}"
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