
const API_KEY = "?api_key=16a029c5dcc1795794a9c728a021c3ce"
const baseUrl = 'https://api.themoviedb.org/'

const getData = async (addedUrl) => {
    try {
        const result = await fetch(baseUrl + addedUrl, { method: 'GET' })
            .then(response => response.json())
            .catch(error => console.log(error + 'error!'))
        return result
    }
    catch (error) {
        console.log(error + 'Connection error!');
    }
}
