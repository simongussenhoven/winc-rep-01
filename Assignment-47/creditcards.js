
//current date


//convert to date object
const convertedExpirationDate = (date) => {
    const splitDate = date.split("/");
    const month = parseInt((splitDate[0] - 1));
    const year = parseInt(`20${splitDate[1]}`);
    const newDate = new Date(year, month, 1, 12);
    return newDate;
}

const willExpire = (date) => {
    const currentDate = new Date()
    if (
        convertedExpirationDate(date) > currentDate &&
        convertedExpirationDate(date).getFullYear() < currentDate.getFullYear() + 1
    ) {
        return true
    }
    else {
        return false
    }
}

console.log(willExpire("10/21"))

    //create array to call

//     const createCallables = () => {
//         const callables = [] //all people to be called
//         randomPersonData.forEach(person => {
//             if (
//                 person.age <= 18 &&
//                 toExpire(person.credit_card.expiration) = true &&
//         ){
//             return true
//         }
//     else {
//     return false
// }
