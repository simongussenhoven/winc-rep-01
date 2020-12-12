//Deel A

const addTheWordCool = (array) => {
    array.push("cool");
    return array;
};

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

//Deel B

const amountOfElementsInArray = (array) => {
    return array.length;
};

console.log("Count elements:", amountOfElementsInArray(['appels', 'peren', 'citroenen']));

//Deel C

const selectBelgiumFromBenelux = (array) => {
    return array[0];
}

console.log("Het eerste land:", selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

//Deel D

const lastElementInArray = (array) => {
    return array[array.length - 1];
}

console.log("Laatste element: ", lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

//Deel E

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = (array) => {
    const presidents2 = array.slice(1, 4);
    return presidents2;
};

const impeachTrumpSplice = (array) => {
    const removedElement = array.splice(0, 1);
    return array;
};

console.log("Weg met trump!: ", impeachTrumpSlice(presidents));
console.log("Weg met trump 2!: ", impeachTrumpSplice(presidents));

//Deel F

const stringsTogether = (array) => {
    return array.join(' ');
};

console.log("De hele zin: ", stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))

//Deel G

const combineArrays = (array1, array2) => {
    return array1.concat(array2);
}

console.log("Concat elements: ", combineArrays([1, 2, 3], [4, 5, 6]))

