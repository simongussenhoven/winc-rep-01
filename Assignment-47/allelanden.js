const createAllCountries = () => {
    //maak lijst met alle landen
    const allCountries = []
    const getPersons = () => {
        //vind alle personen
        const allPersons = randomPersonData.map(person => {
            return person
        });
        //check voor elk persoon of het land in de lijst voorkomt, zo nee: voeg toe.
        allPersons.forEach(person => {
            if (allCountries.includes(person.region)) {
            }
            else {
                allCountries.push(person.region);
            }

        })
        allCountries.sort();
    }
    getPersons()

    //maak lijst in de dom van array
    const createList = (list) => {

        //functie verwijder de lijst
        section = document.getElementById('listsection');
        section.innerHTML = '';

        //plemp lege lijst in section
        header = document.createElement('h1');
        header.innerHTML = 'Alle landen';
        domList = document.createElement('ul');
        section.appendChild(header);
        section.appendChild(domList);

        //vul de lijst met items
        list.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item;
            domList.appendChild(li)
        })
    }
    createList(allCountries)
}
const countriesByNumber = () => {
    
}