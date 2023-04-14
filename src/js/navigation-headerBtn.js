import { refs } from "./services/references";

refs.homePageBtn.addEventListener('click', ()=>{
    refs.homePageBtn.classList.add('underlined-js');
    refs.libraryPageBtn.classList.remove('underlined-js');
    refs.header.classList.remove('lib-header');
    refs.searchForm.classList.remove('is-hidden');
    refs.libraryHeaderBtnBox.classList.add('is-hidden');
});

refs.libraryPageBtn.addEventListener('click',()=>{
    refs.homePageBtn.classList.remove('underlined-js');
    refs.libraryPageBtn.classList.add('underlined-js');
    refs.header.classList.add('lib-header');
    refs.searchForm.classList.add('is-hidden');
    refs.libraryHeaderBtnBox.classList.remove('is-hidden');
});
