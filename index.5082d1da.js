const e={header:document.querySelector(".header"),homePageBtn:document.querySelector('[data-action="home"]'),libraryPageBtn:document.querySelector('[data-action="library"]'),searchForm:document.querySelector(".search-form"),libraryHeaderBtnBox:document.querySelector(".header-btn-wrapper"),moviesGallery:document.querySelector(".movies-gallery"),outerPaginationButtonsList:document.querySelector(".pagination-list"),innerPaginationButtonsList:document.querySelector(".inner-pagination-list"),prevBtn:document.querySelector('[data-action="prev"]'),nextBtn:document.querySelector('[data-action="next"]'),modal:document.querySelector(".modal"),backdrop:document.querySelector(".backdrop"),wrapBox:document.querySelector(".movieCard-box"),closeBtn:document.querySelector(".button-close")};e.homePageBtn.addEventListener("click",(()=>{e.homePageBtn.classList.add("underlined-js"),e.libraryPageBtn.classList.remove("underlined-js"),e.header.classList.remove("lib-header"),e.searchForm.classList.remove("is-hidden"),e.libraryHeaderBtnBox.classList.add("is-hidden")})),e.libraryPageBtn.addEventListener("click",(()=>{e.homePageBtn.classList.remove("underlined-js"),e.libraryPageBtn.classList.add("underlined-js"),e.header.classList.add("lib-header"),e.searchForm.classList.add("is-hidden"),e.libraryHeaderBtnBox.classList.remove("is-hidden")}));var t={fetchMovies:async function(e){const t=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7ab62af97d9519a1533e4099d15ee467&page=${e}&adult=true`);return await t.json()},fetchMoviesById:async function(e){const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=7ab62af97d9519a1533e4099d15ee467&language=en-US`);return await t.json()},searchMovies:async function(e){const t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=7ab62af97d9519a1533e4099d15ee467&language=en-US&page=1&include_adult=false&query=${e}`);return await t.json()},fetchPopularMovies:async function(e){const t=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7ab62af97d9519a1533e4099d15ee467&language=en-US&page=${e}&include_adult=false`);return await t.json()}};function n(t,n,a){let o="";if(n>500&&(n=500),n<6)for(let e=1;e<=n;e++)o+=i(e);if(n>6&&t+a<n&&n-t>=6){if(t<6)for(let e=1;e<=6;e++)o+=i(e);else{o+=`${i(1)}<span>...</span>`;for(let e=t-a;e<=t+a;e++)o+=`${i(e)}`}o+=`<span>...</span>${i(n)}`}if(n>6&&n-t<6){o+=`${i(1)}<span>...</span>`;for(let e=n-6;e<=n;e++)o+=i(e)}var s;return s=o,e.innerPaginationButtonsList.innerHTML=s,[...document.querySelectorAll(".paginate-btn")].map((e=>{e.name==t?e.classList.add("active-btn"):e.classList.remove("active-btn")})),o}function a(t,a,i){1!==t?s(e.prevBtn):o(e.prevBtn),t==i.name?o(e.nextBtn):s(e.nextBtn),e.moviesGallery.innerHTML="",r(t),n(t,a,2),setTimeout((()=>{window.scrollTo({top:300,behavior:"smooth"})}),100)}function i(e){return`<li class="pagination-item"><button class="paginate-btn" type="button" name="${e}">${e}</button></li>`}function o(e){e.setAttribute("disabled",""),e.classList.remove("paginate-btn")}function s(e){e.removeAttribute("disabled"),e.classList.add("paginate-btn")}async function r(t,a){await a(t).then((({results:a,total_pages:i})=>{e.moviesGallery.innerHTML=d(a),c(e.moviesGallery,a),n(t,i,2)}))}function d(e){return e.map((e=>`\n    <li class="movie__item">\n    <img \n    id="${e.id}"\n    class="movie__image" \n    src="https://image.tmdb.org/t/p/w500${e.poster_path}" \n    alt="${e.title}"/>\n    <h2 class="movie__name">${e.title}</h2>\n    <div class="movie__info-box">\n    <p class="movie__info">${e.vote_average.toFixed(1)}</p>\n    <p class="movie__info">${e.release_date}</p>\n    </div>\n    </li>`)).join("")}function c(e,t){e.insertAdjacentHTML("beforeend",d(t))}function l(){e.backdrop.classList.add("is-hidden"),e.wrapBox.innerHTML=""}e.innerPaginationButtonsList.addEventListener("click",(function(t){e.activePaginationBtn=e.innerPaginationButtonsList.querySelector("li .active-btn");const n=e.innerPaginationButtonsList.lastChild.querySelector(".paginate-btn");let i=Number(n.name),o=Number(t.target.name);if("paginate-btn"!==t.target.className)return;a(o,i,n)})),e.prevBtn.addEventListener("click",(()=>{const t=e.innerPaginationButtonsList.lastChild.querySelector(".paginate-btn");let n=e.innerPaginationButtonsList.getElementsByClassName("paginate-btn active-btn"),i=Number(t.name);a(Number(n[0].name)-1,i,t)})),e.nextBtn.addEventListener("click",(()=>{const t=e.innerPaginationButtonsList.lastChild.querySelector(".paginate-btn");let n=e.innerPaginationButtonsList.getElementsByClassName("paginate-btn active-btn"),i=Number(t.name);a(Number(n[0].name)+1,i,t)})),r(1,t.fetchMovies),e.searchForm.addEventListener("submit",(a=>{a.preventDefault();let i=a.target.elements.searchQuery.value;t.searchMovies(i).then((({results:t,total_pages:a})=>{e.moviesGallery.innerHTML="",e.innerPaginationButtonsList.innerHTML=n(1,a,2),c(e.moviesGallery,t)}))})),e.closeBtn.addEventListener("click",l),e.backdrop.addEventListener("click",(t=>{t.target===e.backdrop&&l()})),e.moviesGallery.addEventListener("click",(n=>{const a=n.target.className,i=n.target.id;"movie__image"===a&&t.fetchMoviesById(i).then((t=>{var n;e.backdrop.classList.remove("is-hidden"),n=t,e.wrapBox.insertAdjacentHTML("afterbegin",function(e){return`\n    <div class="modal-poster-box">\n      <img class="modal-img"\n        id="${e.id}"\n        src="https://image.tmdb.org/t/p/w500${e.poster_path}" \n        alt="${e.original_title}"/>\n    </div>\n\n    <div class="modal-info-box">\n        <div class="modal-info-wrapper">\n\n        <h2 class="movie-title">${e.original_title}</h2>\n        <p class="movie-about-info">\n        Vote/Votes: \n        <span class="vote-average">${e.vote_average.toFixed(1)}</span>\n        <span>/${e.vote_count}</span>\n        </p>\n        <p class="movie-about-info">Popularity: <span>${e.popularity.toFixed(1)}</span></p>\n        <p class="movie-about-info">Original Title: <span>${e.original_title}</span></p>\n        <p class="movie-about-info">Genre: <span>Western</span></p>\n        <h3 class="subtitle">About</h3>\n        <p class="movie-overview">${e.overview}</p>\n\n        </div>\n\n        <div class="btn-box">\n        <button class="modal-btn" data-action="watched">Add to watched</button>\n        <button class="modal-btn" data-action="queued">Add to queued</button>\n        </div>\n    </div>`}(n)),e.watchedBtn=document.querySelector('.btn-box > [data-action="watched"]'),e.queuedBtn=document.querySelector('.btn-box > [data-action="queued"]'),e.watchedBtn.addEventListener("click",(t=>{e.watchedBtn.classList.toggle("active-btn"),"Add to watched"==e.watchedBtn.textContent?e.watchedBtn.textContent="Remove from watched":e.watchedBtn.textContent="Add to watched"})),e.queuedBtn.addEventListener("click",(()=>{e.queuedBtn.classList.toggle("active-btn"),"Add to queued"==e.queuedBtn.textContent?e.queuedBtn.textContent="Remove from queued":e.queuedBtn.textContent="Add to queued"}))}))}));
//# sourceMappingURL=index.5082d1da.js.map