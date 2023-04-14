import { refs } from "./services/references";
import { fetchAndRenderMainPageContent } from "./movies-gallery";

export  function renderPaginationMarkup(currentPage, totalPages, numAdjacentPages) {
    let paginationMarkup = "";
    
    if(totalPages>500){
        totalPages=500;
    };

    if (totalPages < 6) {
    for (let i = 1; i <= totalPages; i++) {
    paginationMarkup += createPaginationMarkupString(i);
    }
    }
    
    if (
    totalPages > 6 &&
    currentPage + numAdjacentPages < totalPages &&
    totalPages - currentPage >= 6
    ) {
    if (currentPage < 6) {
    for (let i = 1; i <= 6; i++) {
    paginationMarkup += createPaginationMarkupString(i);
    }
    } else {
    paginationMarkup += `${createPaginationMarkupString(1)}<span>...</span>`;
    
    
      for (let i = currentPage - numAdjacentPages; i <= currentPage + numAdjacentPages; i++) {
        paginationMarkup += `${createPaginationMarkupString(i)}`;
      }
    }
    
    paginationMarkup += `<span>...</span>${createPaginationMarkupString(totalPages)}`;
    }
    
    if (totalPages > 6 && totalPages - currentPage < 6) {
    paginationMarkup += `${createPaginationMarkupString(1)}<span>...</span>`;
    
    
    for (let i = totalPages - 6; i <= totalPages; i++) {
      paginationMarkup += createPaginationMarkupString(i);
    }
    }
    
    // fetchAndRenderMainPageContent(1);
    appendPaginationMarkup(paginationMarkup);

    let paginateBtns=[...document.querySelectorAll('.paginate-btn')]
    paginateBtns.map(btn=>{
        if(btn.name==currentPage){
            btn.classList.add('active-btn')
        }
        else{
            btn.classList.remove('active-btn')
        }
    })
    }
    
    // // Обработка кликов на кнопки пагинации
    refs.innerPaginationButtonsList.addEventListener("click", switchingPages);
    
    function switchingPages(e) {
    refs.activePaginationBtn = refs.innerPaginationButtonsList.querySelector("li .active-btn");
    
    const lastPaginationPage = refs.innerPaginationButtonsList.lastChild.querySelector(".paginate-btn");
    let totalPages= Number(lastPaginationPage.name);
    let currentPage = Number(e.target.name);
    
    if (e.target.className !== "paginate-btn") {
    return;
    }

    updateUI(currentPage, totalPages, lastPaginationPage);
}

refs.prevBtn.addEventListener('click', ()=>{
    const lastPaginationPage = refs.innerPaginationButtonsList.lastChild.querySelector(".paginate-btn");
    let activePaginateBtn=refs.innerPaginationButtonsList.getElementsByClassName("paginate-btn active-btn")
    let totalPages= Number(lastPaginationPage.name);
    let currentPage=Number(activePaginateBtn[0].name)-1;

    updateUI(currentPage, totalPages, lastPaginationPage);
   
})
refs.nextBtn.addEventListener('click', ()=>{
    const lastPaginationPage = refs.innerPaginationButtonsList.lastChild.querySelector(".paginate-btn");
    let activePaginateBtn=refs.innerPaginationButtonsList.getElementsByClassName("paginate-btn active-btn")
    let totalPages= Number(lastPaginationPage.name);
    let currentPage=Number(activePaginateBtn[0].name)+1;

    updateUI(currentPage, totalPages, lastPaginationPage);
})

function updateUI(currentPage, totalPages, lastPaginationPage){
    currentPage !== 1 ? enabledPaginationBtn(refs.prevBtn) : disabledPaginationBtn(refs.prevBtn);
    currentPage == lastPaginationPage.name ? disabledPaginationBtn(refs.nextBtn) : enabledPaginationBtn(refs.nextBtn);

    refs.moviesGallery.innerHTML='';
    fetchAndRenderMainPageContent(currentPage);
    renderPaginationMarkup(currentPage, totalPages, 2);
    scrollUp();
}
    
    function createPaginationMarkupString(val){
       return `<li class="pagination-item"><button class="paginate-btn" type="button" name="${val}">${val}</button></li>`
    };
    
    function appendPaginationMarkup(markup){
       refs.innerPaginationButtonsList.innerHTML=markup;
    };
    
    function disabledPaginationBtn(el){
       el.setAttribute('disabled', '');
       el.classList.remove('paginate-btn')
    };
    
    function enabledPaginationBtn(el){
       el.removeAttribute('disabled');
       el.classList.add('paginate-btn')
    };
    
   function scrollUp() {
    setTimeout(() => {
        window.scrollTo({
            top: 300,
            behavior: 'smooth',
         })
    }, 100);
    };