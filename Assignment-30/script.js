let userName = prompt('Wat is je naam?');
let min = prompt('Vanaf welk nummer wil je raden?');
let max = prompt('Tot welk nummer wil je raden?');
let tries = 4;
let random = Math.floor(Math.random() * (max - min + 1) + min);

console.log(userName + ', ' + min + ', ' + max)
alert('Hallo ' + userName + '. Je raadt tussen ' + min + ' en ' + max + ', je hebt 5 pogingen. Succes!')

for (tries = 4; tries > -1;) {
    userNumber = prompt('Doe een gok.')
    if (userNumber == random) {
        alert('Dat is goed! Je hebt gewonnen.');
        break;
    }
    else {
        alert('Dat was fout. Je hebt nog ' + tries + ' pogingen over.');
        --tries;
    }
}
alert('Het spel is nu voorbij.')
