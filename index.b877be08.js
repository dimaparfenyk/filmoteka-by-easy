const e={header:document.querySelector(".header"),homePageBtn:document.querySelector('[data-action="home"]'),libraryPageBtn:document.querySelector('[data-action="library"]'),searchForm:document.querySelector(".search-form"),libraryHeaderBtnBox:document.querySelector(".header-btn-wrapper"),moviesGallery:document.querySelector(".movies-gallery"),outerPaginationButtonsList:document.querySelector(".pagination-list"),innerPaginationButtonsList:document.querySelector(".inner-pagination-list"),prevBtn:document.querySelector('[data-action="prev"]'),nextBtn:document.querySelector('[data-action="next"]')};e.homePageBtn.addEventListener("click",(()=>{e.homePageBtn.classList.add("underlined-js"),e.libraryPageBtn.classList.remove("underlined-js"),e.header.classList.remove("lib-header"),e.searchForm.classList.remove("is-hidden"),e.libraryHeaderBtnBox.classList.add("is-hidden")})),e.libraryPageBtn.addEventListener("click",(()=>{e.homePageBtn.classList.remove("underlined-js"),e.libraryPageBtn.classList.add("underlined-js"),e.header.classList.add("lib-header"),e.searchForm.classList.add("is-hidden"),e.libraryHeaderBtnBox.classList.remove("is-hidden")}));var t={fetchMovies:async function(e){const t=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7ab62af97d9519a1533e4099d15ee467&page=${e}&adult=true`);return await t.json()},fetchMoviesById:async function(e){const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=7ab62af97d9519a1533e4099d15ee467&language=en-US`);return await t.json()},searchMovies:async function(e){const t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=7ab62af97d9519a1533e4099d15ee467&language=en-US&page=1&include_adult=false&query=${e}`);return await t.json()},fetchPopularMovies:async function(e){const t=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7ab62af97d9519a1533e4099d15ee467&language=en-US&page=${e}&include_adult=false`);return await t.json()}};function n(t,n,a){let s="";if(n>500&&(n=500),n<6)for(let e=1;e<=n;e++)s+=i(e);if(n>6&&t+a<n&&n-t>=6){if(t<6)for(let e=1;e<=6;e++)s+=i(e);else{s+=`${i(1)}<span>...</span>`;for(let e=t-a;e<=t+a;e++)s+=`${i(e)}`}s+=`<span>...</span>${i(n)}`}if(n>6&&n-t<6){s+=`${i(1)}<span>...</span>`;for(let e=n-6;e<=n;e++)s+=i(e)}var r;r=s,e.innerPaginationButtonsList.innerHTML=r,[...document.querySelectorAll(".paginate-btn")].map((e=>{e.name==t?e.classList.add("active-btn"):e.classList.remove("active-btn")}))}function a(t,a,i){1!==t?r(e.prevBtn):s(e.prevBtn),t==i.name?s(e.nextBtn):r(e.nextBtn),e.moviesGallery.innerHTML="",o(t),n(t,a,2),setTimeout((()=>{window.scrollTo({top:300,behavior:"smooth"})}),100)}function i(e){return`<li class="pagination-item"><button class="paginate-btn" type="button" name="${e}">${e}</button></li>`}function s(e){e.setAttribute("disabled",""),e.classList.remove("paginate-btn")}function r(e){e.removeAttribute("disabled"),e.classList.add("paginate-btn")}async function o(a){await t.fetchMovies(a).then((({results:t,total_pages:i})=>{var s;s=t,e.moviesGallery.insertAdjacentHTML("beforeend",function(e){return e.map((e=>`\n    <li class="movie__item">\n    <img \n    class="movie__image" \n    src="https://image.tmdb.org/t/p/w500${e.poster_path}" \n    alt="${e.title}"/>\n    <h2 class="movie__name">${e.title}</h2>\n    <div class="movie__info-box">\n    <p class="movie__info">${e.vote_average.toFixed(1)}</p>\n    <p class="movie__info">${e.release_date}</p>\n    </div>\n    </li>`)).join("")}(s)),n(a,i,2)}))}e.innerPaginationButtonsList.addEventListener("click",(function(t){e.activePaginationBtn=e.innerPaginationButtonsList.querySelector("li .active-btn");const n=e.innerPaginationButtonsList.lastChild.querySelector(".paginate-btn");let i=Number(n.name),s=Number(t.target.name);if("paginate-btn"!==t.target.className)return;a(s,i,n)})),e.prevBtn.addEventListener("click",(()=>{const t=e.innerPaginationButtonsList.lastChild.querySelector(".paginate-btn");let n=e.innerPaginationButtonsList.getElementsByClassName("paginate-btn active-btn"),i=Number(t.name);a(Number(n[0].name)-1,i,t)})),e.nextBtn.addEventListener("click",(()=>{const t=e.innerPaginationButtonsList.lastChild.querySelector(".paginate-btn");let n=e.innerPaginationButtonsList.getElementsByClassName("paginate-btn active-btn"),i=Number(t.name);a(Number(n[0].name)+1,i,t)})),o(1);
//# sourceMappingURL=index.b877be08.js.map