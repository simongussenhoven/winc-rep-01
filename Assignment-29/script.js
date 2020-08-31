
let i = 0;
let colors = ["Yellow","Blue", "Red", "Orange"];
let colorsLength = colors.length;
let iterateColors = function (colors) {
    console.log(colors)
}
/*
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

for (let i = 0; i < colorsLength; i++) {
    console.log(colors[i]);
}
*/
//colors.forEach(iterateColors);  

//1: while = 4 regels
//2: forEach = 1 regel
//3: Ontworpen op te "itereren", geen variabele declaration, minder off by one error door gebruik van verkeerde operators. While vind ik duidelijker leesbaar, maar waarschijnlijk omdat dit nieuw voor mij is.

let child = {
    age: 12,
    nice: false,
    name: "James",
    smart: "true",
    length: 155
}
let childList = Object.entries(child);


for (let i = 0; i < childList.length; i++) {
    console.log(childList[i]);
}
//itereren, ja maar niet door het object zelf maar door de variabele die de waarden van het object list.