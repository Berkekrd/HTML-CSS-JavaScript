const API_URL='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=50396cf10c7e321a2ca90bb02fd11268&page=1'
const IMG_PATH='https://image.tmdb.org/t/p/w1280'
const SEARCH_URL='https://api.themoviedb.org/3/search/movie?api_key=50396cf10c7e321a2ca90bb02fd11268&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
    showMovies(data.results)
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(search.value)
    const searchTerm = search.value
    if(searchTerm !== ''){
        getMovies(SEARCH_URL+searchTerm)
        search.value = ''
    }
    else{
        window.location.reload()
    }
})

function showMovies(movies){
    main.innerHTML=''
    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview}= movie
        const movieEl = document.createElement ('div')
        movieEl.classList.add('movie')
        console.log(poster_path)
        if(poster_path!==null){
            movieEl.innerHTML = `
                <img src="${IMG_PATH + poster_path}" alt="${title}">
                <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                </div>
                <div class="Overview">
                <h3>Overview</h3>
                ${overview}
                </div>
                `
            main.appendChild(movieEl)
        }
    });
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}