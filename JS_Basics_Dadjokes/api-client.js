const url = "https://icanhazdadjoke.com/";
const options = {
    method: "GET",
    headers: { "Accept": "application/json" }
};

async function getData() {
    const result = await fetch(url, options)
        .then(response => response.json())
        .catch(error => console.log(error + 'error!'))
    return result.joke
}

const getSearch = async (search) => {
    const result = await fetch(url + 'search?term=' + search, options)
        .then(response => response.json())
        .catch(error => console.log(error + 'error!'))
    return result
}