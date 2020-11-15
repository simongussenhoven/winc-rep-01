

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
    catch {
        alert("Error creating list from data")
    }
}
populateList()

//function to create new single item
const createItem = (element, createdByUser) => {

    //create needed items
    const form = document.createElement('form');
    const checkbox = document.createElement('input');
    makeStatusUpdatable(checkbox)
    const textinput = document.createElement('input');

    //call function on textinput to create functionality to the textfield
    makeValueUpdatable(textinput)
    const image = document.createElement('img');

    //add eventlistener for deleting items
    makeDeletable(image)

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
    let input = form.input.value;
    if (input !== '') {
        const awaitServer = async () => {
            const returnedData = await postData(input);
            try {
                const createdByUser = true;
                createItem(returnedData, createdByUser);
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
        deleteData(image.parentNode.id)
        image.parentNode.parentNode.removeChild(image.parentNode);
    })
}

//create function to update status
const makeStatusUpdatable = (box) => {
    box.addEventListener("change", () => {

        //define variables in function
        id = box.parentNode.id;
        value = box.nextSibling.value;
        status = box.checked;

        //add strike class to sibling
        if (box.checked) {
            box.nextSibling.classList.add("striked")
        } else {
            box.nextSibling.classList.remove("striked")
        }

        //perform API update
        putCheckbox(id, value, status)
    })
}

//create function for updating task value
const makeValueUpdatable = (text) => {
    text.addEventListener("change", () => {
        //get variables
        id = text.parentNode.id;
        value = text.value;
        status = text.previousSibling.checked;

        //perform API update
        putCheckbox(id, value, status)
    })
}