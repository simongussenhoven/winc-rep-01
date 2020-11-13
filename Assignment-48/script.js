const button1 = document.getElementById('button1')
const form = document.getElementById('form')
container = document.getElementById('jokecontainer')

//set joke as p in jokecontainer on click of first button
button1.addEventListener("click", async (jokelist) => {
    container.innerHTML = ''
    const joke = await getData()
    try {
        container.innerHTML = `<p>${joke}</p>`
    }
    catch {
        console.log('error!')
    }
})

//receive search input
form.addEventListener("submit", (e) => {
    if (form.search.value !== '') {
        e.preventDefault();
        setArray(form.search.value);
    }
    else {
        alert("Please enter something to search")
    }
})

//create array of jokes from received object
const setArray = async (search) => {
    const results = await getSearch(search)
    try {
        const jokeList = results.results.map(joke => { return joke.joke });
        makeList(jokeList)
    }
    catch {
        console.log('error')
    }
}

//create list of array in DOM or show error
const makeList = (list) => {
    if (list.length > 0) {
        container.innerHTML = '';
        const ul = document.createElement('ul');
        container.appendChild(ul);
        list.forEach(element => {
            const li = document.createElement('li');
            li.innerHTML = element;
            ul.appendChild(li);
        })
    }
    else {
        container.innerHTML = '<p>Nothing found</p>'
    }
}