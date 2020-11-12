const allCountries =[]
//get sorted array from all countries in object
const getAllCountries = () => {
    randomPersonData.map(person => {
        if(allCountries.includes(person.region)) {/*do nothing*/}
        else {allCountries.push(person.region)}
    })
    allCountries.sort()
}
getAllCountries()

//create list from array
const createDomList = (list, listname) => {
    const section = document.getElementById('listsection');
    const newUl = document.createElement('ul');
    const newLi = document.createElement('li')
    section.appendChild(newUl).setAttribute('id', listname)
    list.forEach(item => {   
        const newLi = document.createElement('li')
        newLi.innerHTML = item
        newUl.appendChild(newLi)
    })
}
