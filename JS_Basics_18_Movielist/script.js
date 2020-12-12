//get array
const movieList = document.querySelector('#movielist');
//console.log('Dit zijn de films', movies)

//IMDB
const imdb = (id) => {
    return "https://www.imdb.com/title/" + id
}

//voeg nieuwe elements toe
const addMoviesTodDom = (movies) => {
    const listItem = movies.map((movie) => {

        const newLi = document.createElement('li')
        const newImg = document.createElement('img')
        const newA = document.createElement('a')

        newLi.appendChild(newA)
        newA.appendChild(newImg)
        newA.href = imdb(movie.imdbID)
        newImg.src = movie.Poster

        return newLi;
    });
    listItem.forEach((item) => {
        movieList.appendChild(item)
        // console.log(item)
    });
};

// call de functie om alle films te plempen
addMoviesTodDom(movies);

//vind buttons
const buttonList = Array.from(document.getElementsByClassName('button'));
console.log('dit zijn de buttons:', buttonList)

//eventListeners
buttonList.forEach((button) => {
    button.addEventListener('change', () => handleOnChangeEvent(event));
})

//filterMovies op title
const filterTitle = (wordInMovieTitle) => {
    return movies.filter((item) => {
        return item.Title.includes(wordInMovieTitle)
    });
}

//filterMovies on year
const filterYear = () => {
    return movies.filter((item) => {
        return item.Year > 2013
    })
}

const handleOnChangeEvent = (event) => {
    console.log(event.target)
    switch (event.target.value) {
        case 'latest':
            movieList.innerHTML = '';
            addMoviesTodDom(filterYear());
            break;
        case 'avengers':
            movieList.innerHTML = '';
            addMoviesTodDom(filterTitle("Avengers"));
            break;
        case 'xmen':
            movieList.innerHTML = '';
            addMoviesTodDom(filterTitle("X-Men"));
            break;
        case 'princess':
            movieList.innerHTML = '';
            addMoviesTodDom(filterTitle("Princess"));
            break;
        case 'batman':
            movieList.innerHTML = '';
            addMoviesTodDom(filterTitle("Batman"));
            break;
    }

};