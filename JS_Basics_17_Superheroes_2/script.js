document.addEventListener("DOMContentLoaded", function () {

    const buttons = Array.from(document.getElementsByClassName('big-five-button'));
    const animalList = document.getElementById('spotted-animals-list');

    buttons.forEach(function (element) {
        element.addEventListener('click', function () {
            let newAnimal = event.target.textContent;
            console.log(newAnimal)
            const newLi = document.createElement("li");
            const animalList = document.getElementById('spotted-animals-list');
            newLi.appendChild(document.createTextNode(newAnimal));
            animalList.appendChild(newLi)
        })
    });

    const removeButton = document.getElementById('remove-first-item-button')
        .addEventListener('click', function () {
            const firstKid = animalList.getElementsByTagName('li')[0];
            animalList.removeChild(firstKid);
            console.log('Remove one!');
        })

    const removeAll = document.getElementById('remove-all-button')
        .addEventListener('click', function () {
            animalList.innerHTML = '';
        });
});
