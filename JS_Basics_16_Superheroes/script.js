

//A
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan = (array) => {
    return array.find(function (hero) {
        return hero.name === "Spiderman"
    });
};

console.log("This is Spiderman:", findSpiderMan(superheroes))

//B

const doubleArrayValues = (array) =>
    array.map(function (element) {
        return element * 2;
    });

console.log("Double the numbers: ", doubleArrayValues([1, 2, 3]))
console.log("Double the numbers: ", doubleArrayValues([1, 10, 15, 17.5]))

//C

const containsNumberBiggerThan10 = function (array) {
    return array.some(element => {
        return element > 10;
    });
};

console.log("There a number that's bigger than 10:", containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]))
console.log("There a number that's bigger than 10:", containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 10]))

//D

const isItalyInTheGreat7 = (array) => {
    return array.includes('Italy');
};

console.log("Italy is in the array:", isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']))
console.log("Italy is in the array:", isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Japan', 'United Kingdom', 'United States']))

//E

//waarom forEach?
/*const tenfold = (array) =>
    array.map(function (element) {
        return element * 10;
    });
*/

const tenfold = function (array) {
    let multiply = [];
    array.forEach(number => {
        multiply.push(number * 10);
    });
    return multiply;
};
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))


//F
function isBelow100(array) {
    return array.every(number => {
        return number < 100;
    });
}

console.log("Alles onder de 100?", isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
console.log("Alles onder de 100?", isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 99, 11, 77, 84, 98]))

//E

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const bigSum = (array) => {
    return array.reduce(reducer);
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))