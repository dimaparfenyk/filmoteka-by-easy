import api from './services/fetch-movies';
import { refs} from './services/references';
import { appendMarkup } from './movies-gallery';
import { renderPaginationMarkup } from './pagination';
import { switchingPages } from './pagination';

refs.searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let searchQuery=e.target.elements.searchQuery.value;
    api.searchMovies(searchQuery)
    .then(({results, total_pages})=>{
        refs.moviesGallery.innerHTML='';
        refs.innerPaginationButtonsList.innerHTML=renderPaginationMarkup(1, total_pages, 2);
        // refs.innerPaginationButtonsList.removeEventListener('click',switchingPages)
        appendMarkup(refs.moviesGallery, results)}) 
})

