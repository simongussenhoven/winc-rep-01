

//A
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan = (array) => {
    return array.find(function (hero) {
        return hero.name === "Spiderman";
    });
};

console.log(findSpiderMan(superheroes))

//B

const doubleArrayValues = (array) => {
    array.forEach(function(element) {
        return element * 2;
    });
}

console.log(doubleArrayValues([1, 2, 3]))


