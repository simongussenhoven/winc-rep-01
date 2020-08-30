
const movie = {
    movieTitle: 'Black moon',
    duration: 90,
    stars: ['Jim bob', 'Bob Bobson', 'Freddy Mcschmeckleson', 'Anita Witzier']
};

let favMovie = function() {
    console.log("The movie " + movie.movieTitle + " takes " + movie.duration + " minutes to watch.")
    console.log('It stars ' + movie.stars.join(', ') + ".");
}

favMovie()
