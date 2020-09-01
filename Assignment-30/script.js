let userName = prompt('Wat is je naam?');
let min = prompt('Vanaf welk nummer wil je raden?');
let max = prompt('Tot welk nummer wil je raden?');
let tries = 5;
let random = Math.floor(Math.random() * (max - min + 1) + min);

console.log(userName + ', ' + min + ', ' + max)
alert('Hallo ' + userName + '. Je raadt tussen ' + min + ' en ' + max + '. Succes!')

for (tries = 5; tries > 0; --tries) {
    userNumber = prompt('Doe een gok.')
    if (userNumber == random) {
        alert('Dat is goed! Je hebt gewonnen.');
        break;
    }
    else {
        alert('Dat was fout. Je hebt nog ' + tries + ' pogingen.')
    }
}
alert('Je hebt geen pogingen meer over. Het spel is nu voorbij.')