async function getData() {
    const API_KEY = "16a029c5dcc1795794a9c728a021c3ce"
    const keySlot = "?api_key="
    const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list'
    try {
        const result = await
            fetch(apiUrl + keySlot + API_KEY, { method: 'GET' })
                .then(response => response.json();
                console.log('Success')
                )
                .then()
                .catch('error!')
    }
    catch (error) {
        console.log("Catch: " + error);
    }
}
