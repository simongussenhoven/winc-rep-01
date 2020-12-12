
//create genrelist
const createGenreList = async () => {
    const results = await getData('3/genre/movie/list' + API_KEY)
    try {
        results.genres.forEach(genre => {
            li = document.createElement('li');
            li.innerHTML = `Genre naam: ${genre.name}, id: ${genre.id}`;
            genrelist.appendChild(li)
        });
    }
    catch (error) {
        console.log(error + 'error')
    }
}
createGenreList()

//create top movie list
const createPersonalTopList = async () => {
    const imdbId = "tt8579674"
    const externalSource = "&external_source=imdb_id"
    const results = await getData('3/find/' + imdbId + API_KEY + externalSource)
    try {
        const title = results.movie_results[0].title;
        li = document.createElement('li');
        li.innerHTML = title;
        personaltop.appendChild(li)
    }
    catch (error) {
        console.log(error + 'error')
    }
}

createPersonalTopList()

const topRated = async () => {
    const results = await getData('3/movie/top_rated' + API_KEY)

    try {
        const top10 = results.results.slice(0, 10);
        top10.forEach(movie => {
            li = document.createElement('li');
            li.innerHTML = movie.title
            toprated.appendChild(li);
        })
    }
    catch (error) {
        console.log(error + 'error')
    }
}

topRated()

const topAction = async () => {
    const results = await getData('3/discover/movie' + API_KEY + "&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&with_genres=28")
    try {
        const top10action = results.results.slice(0, 10);
        top10action.forEach(movie => {
            li = document.createElement('li');
            li.innerHTML = movie.title
            topaction.appendChild(li)
        })
    }
    catch (error) {
        console.log(error + 'error')
    }
}

topAction()

const topSeventyFive = async () => {
    const results = await getData('3/discover/movie' + API_KEY + "&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&primary_release_year=1975")
    try {
        const topSeventyFive = results.results.slice(0, 10);
        console.log(topSeventyFive)
        topSeventyFive.forEach(movie => {
            li = document.createElement('li');
            li.innerHTML = movie.title;
            top1975.appendChild(li)
        })
    }
    catch (error) {
        console.log(error + 'error')
    }
}

topSeventyFive()

