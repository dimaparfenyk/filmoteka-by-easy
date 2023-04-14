const URL = 'https://api.themoviedb.org/3/';
const API_KEY = '7ab62af97d9519a1533e4099d15ee467';

async function fetchMovies(page){
 const res = await fetch(`${URL}movie/popular?api_key=${API_KEY}&page=${page}&adult=true`);
    return await res.json();
} 

async function fetchMoviesById(movieId){
    const res=await fetch(`${URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    return await res.json();
};

async function searchMovies(query){
    const res=await fetch(`${URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
    return await res.json();
}

async function fetchPopularMovies(curPage){
    const res=await fetch(`${URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${curPage}&include_adult=false`)
    return await res.json();
}

export default {fetchMovies, fetchMoviesById, searchMovies, fetchPopularMovies}