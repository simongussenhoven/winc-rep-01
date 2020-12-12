//convert passed date to date object
const convert = (date) => {
    const splitDate = date.split("/");
    const month = parseInt((splitDate[0] - 1));
    const year = parseInt(`20${splitDate[1]}`);
    const newDate = new Date(year, month, 1, 01);
    return newDate.getTime();
}

//convert expiration date back to readable date
const convertBack = (date) => {
    month = new Date(date).getMonth() + 1
    year = new Date(date).getFullYear()
    return `1/${month}/${year}`
}

//compare passed date with current date
const willExpire = (date) => {
    currentDate = Date.now()
    let convertedDate = convert(date);
    const oneYear = 31536000000;
    if (convertedDate > currentDate && convertedDate < currentDate + oneYear) { return true }
    else { return false }
}

//createSortableArray and sort it
const newRandomPersonData = []
const createSortable = (array) => {
    array.map(person => {
        if (willExpire(person.credit_card.expiration) && person.age >= 18) {
            const newPerson = [];
            newPerson.push(
                convert(person.credit_card.expiration),
                `${person.name} ${person.surname}`,
                person.phone,
                person.credit_card.number,
            )
            newRandomPersonData.push(newPerson)
        }
        else {
            //do nothing
        }
    })
    return newRandomPersonData.sort()
}
createSortable(randomPersonData)

//reorder the list
const reorder = (array) => {
    array.map(person => {
        person.push(convertBack(person[0]));
        person.splice(0, 1);
    })
    return array
}
reorder(newRandomPersonData)

//return
const returnList = () => {
    return newRandomPersonData
}