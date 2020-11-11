//convert passed date to date object
const convertExpirationDate = (date) => {
    const splitDate = date.split("/");
    const month = parseInt((splitDate[0] - 1));
    const year = parseInt(`20${splitDate[1]}`);
    const newDate = new Date(year, month, 1, 12);
    return newDate.getTime();
}

//create a sorted object
const sortablePersonData = (array) => {
    const sortablePersonData =[];
    array.map(item => {
        sortablePersonData.push(item.credit_card.expiration,getTime())
        )
    })
    return sortablePersonData.sort()
}
sortablePersonData(randomPersonData)

// //compare passed date with current date
// const willExpire = (date) => {
//     const currentDate =  Date.now()
//     let convertedDate = convertedExpirationDate(date);
//     const oneYear = 31536000000;
//     if (date > currentDate && date < currentDate + oneYear) 
//     {return true}
//     else 
//     {return false}
// }

//create array to call
// const callablePersons = []
// const createCallables = () => {
//     randomPersonData.map(person => {
//         callablePerson = []
//         if(willExpire(person.credit_card.expiration) && person.age >= 18){
//             callablePerson.push(
//                 `Full name: ${person.name} ${person.surname}<br/>
//                 Phonenumber: ${person.phone}<br/>
//                 Creditcard number: ${person.credit_card.number} <br/>
//                 Expirationdate: ${person.credit_card.expiration}<br/>
//                 `
//             )
//             callablePersons.push(callablePerson)
//             }
//         else {
//             //do nothing
//         }
//     })
// }

// createCallables()