import { refs } from "./services/references";
import api from "./services/fetch-movies";
import renderModalFilmCardMarkup from "./renderModalMovieCard";

refs.closeBtn.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', (e)=>{
    e.target===refs.backdrop && closeModal();
})
refs.moviesGallery.addEventListener('click', (e)=>{
   
    const className=e.target.className;
    const movieId=e.target.id;

    if(className!=="movie__image"){
        return;
    };
    // запрос для получения res по id
    api.fetchMoviesById(movieId).then(res=>{
        refs.backdrop.classList.remove('is-hidden')
        appendModalMarkup(res);
    
        // добавляю в рефы ссылки на ДОМ-узлы - кнопки модалки
        refs.watchedBtn=document.querySelector('.btn-box > [data-action="watched"]')
        refs.queuedBtn=document.querySelector('.btn-box > [data-action="queued"]')

        // вешаю обработчик событий на кнопки модалки
        refs.watchedBtn.addEventListener('click', (e)=>{
            refs.watchedBtn.classList.toggle('active-btn');
            
            if(refs.watchedBtn.textContent=='Add to watched'){
                refs.watchedBtn.textContent='Remove from watched'
            }else{
                refs.watchedBtn.textContent='Add to watched'
            }
        })
        // вешаю обработчик событий на кнопки модалки
        refs.queuedBtn.addEventListener('click', ()=>{
            refs.queuedBtn.classList.toggle('active-btn');

            if(refs.queuedBtn.textContent=='Add to queued'){
                refs.queuedBtn.textContent='Remove from queued'
            }else{
                refs.queuedBtn.textContent='Add to queued'
            }
        })
    })
    });

function closeModal(){
    refs.backdrop.classList.add('is-hidden');
    refs.wrapBox.innerHTML='';
};

function appendModalMarkup(item){
    refs.wrapBox.insertAdjacentHTML('afterbegin',renderModalFilmCardMarkup(item))
 };