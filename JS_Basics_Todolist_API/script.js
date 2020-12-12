

//Use this in several functions so declare here
const container = document.getElementById('todolist')

//create listitem in dom for each item in data list, create delete and update function afterwards
const populateList = async () => {
    dataList = await getData();
    try {
        dataList.forEach(element => {
            createItem(element);
        })
    }
    catch (error) {
        alert(error)
    }
}
populateList()

//function to create new single item
const createItem = (element, createdByUser) => {

    //create needed items
    const form = document.createElement('form');
    const checkbox = document.createElement('input');
    makeStatusUpdatable(checkbox);
    const textinput = document.createElement('input');

    //call function on textinput to create functionality to the textfield
    makeValueUpdatable(textinput);
    const image = document.createElement('img');

    //add eventlistener for deleting items
    makeDeletable(image);

    //create a new form with elements, if a single item is added, add it as first child
    if (createdByUser) {
        container.prepend(form);
    }
    else {
        container.appendChild(form);
    }
    form.setAttribute("class", "inputform");
    form.appendChild(checkbox);
    form.setAttribute("id", element._id);
    preventSubmit(form);

    //create checkbox and set checkbox to checked if status is done
    checkbox.setAttribute("type", "checkbox");
    if (element.done == "true") {
        checkbox.setAttribute("checked", "checked");
    }
    checkbox.setAttribute("class", "checkbox");

    //add text input and strike if checkbox is status is done
    form.appendChild(textinput);
    textinput.setAttribute("type", "text");
    textinput.setAttribute("value", element.description);
    textinput.setAttribute("class", "text");
    if (element.done == "true") {
        textinput.classList.add("striked");
    }



    form.appendChild(image);
    image.src = "delete.png";
    image.setAttribute("class", "delete");
}

//add functionality to input form
const form = document.getElementById('topinput');
form.addEventListener("submit", (e) => {
    //create object from input, so DOM element can be create before getting an ID back
    let input = {
        description: form.input.value
    }
    if (input.description !== '') {
        //play write audio
        const audio = new Audio('write.mp3');
        audio.play();
        const createdByUser = true;
        createItem(input, createdByUser);
        const awaitServer = async () => {
            const returnedData = await postData(input.description);
            try {
                container.firstChild.setAttribute("id", returnedData._id)
            }
            catch (error) {
                console.log(error)
            }
        }
        awaitServer()
        form.input.value = ''
    }
    else {
        alert(`Can't add empty task`)
    }
    e.preventDefault();
})

//create function to delete the item
const makeDeletable = (image) => {
    image.addEventListener("click", () => {
        const audio = new Audio('trash.mp3');
        audio.play();
        deleteData(image.parentNode.id);
        image.parentNode.parentNode.removeChild(image.parentNode);
    })
}

//create function to update status
const makeStatusUpdatable = (box) => {
    box.addEventListener("change", () => {
        const audio = new Audio('scratch.mp3');
        audio.play();
        //define variables in function
        id = box.parentNode.id;
        value = box.nextSibling.value;
        status = box.checked;

        //add strike class to sibling
        if (box.checked) {
            box.nextSibling.classList.add("striked");
        } else {
            box.nextSibling.classList.remove("striked");
        }

        //perform API update
        putCheckbox(id, value, status);
    })
}

//create function for updating task value
const makeValueUpdatable = (text) => {
    text.addEventListener("change", (e) => {
        const audio = new Audio('write.mp3');
        audio.play();

        //get variables
        id = text.parentNode.id;
        value = text.value;
        status = text.previousSibling.checked;

        //perform API update
        putCheckbox(id, value, status);
        e.preventdefault();
    })
}

//add this eventhandler to forms to prevent submitting
const preventSubmit = (form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log('error')
    })
}
