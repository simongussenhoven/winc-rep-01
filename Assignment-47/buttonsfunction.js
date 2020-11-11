
//function for clearing old list
const listsection = document.getElementById('listsection')
const clear = () => {
    listsection.innerHTML = '';
}

//function for adding clear to all buttons
const buttons = Array.from(document.getElementsByTagName('button'))
buttons.forEach(button => {
    button.addEventListener("click", () => {
        clear()
    })
})

//function for adding functionality to first button
const button1 = document.getElementById('button1');
button1.addEventListener("click", () => {
    createDomList(allCountries, 'allcountries')
});