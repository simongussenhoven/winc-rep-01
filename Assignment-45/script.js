const data = async () => {
    try {
        await getData()
    }
    catch {
        console.log('Error error error!')
    }
}
data()

const getMovieGenres = async () => {
    try {
        console.log(genres)
    }
    catch {
        console.log('Error getting genres')
    }
}

const createList = (arr) => {
    arr.array.forEach(element => {
        return element
    });
} 