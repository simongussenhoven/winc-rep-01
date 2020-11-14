//maak lijstje in array door populate aan te roepen
const createlist = async () => {
    const data = await getData()
    try {
        populateList(data)
        createDeleteFunction()
        createAddFunction()
        createUpdateStatus()
        createUpdateValue()
    }
    catch (error) {
        console.log(error + 'error!')
    }
}

createlist()

//stop alle data in een lijst met bijbehorende elementen
const container = document.getElementById('todolist')

const populateList = (list) => {
    container.innerHTML = '';
    list.forEach(element => {
        //how to create
        const form = document.createElement('form');
        const label1 = document.createElement('label');
        const label2 = document.createElement('label');
        const checkbox = document.createElement('input');
        const textinput = document.createElement('input');
        const image = document.createElement('img');

        //create a new form with id
        container.appendChild(form);
        form.setAttribute("class", "inputform")
        form.appendChild(checkbox)
        form.setAttribute("id", element._id)
        checkbox.setAttribute("type", "checkbox")
        if (element.done == "true") {
            checkbox.setAttribute("checked", "checked")
        }
        checkbox.setAttribute("class", "checkbox")
        form.appendChild(textinput)
        textinput.setAttribute("type", "text")
        textinput.setAttribute("value", element.description)
        textinput.setAttribute("class", "text")
        if (textinput.previousSibling.checked) {
            textinput.classList.add("striked")
        }

        form.appendChild(image)
        image.src = "delete.png"
        image.setAttribute("class", "delete")
    })
}

//create function to delete items
const createDeleteFunction = () => {
    const buttonList = Array.from(document.getElementsByClassName('delete'));
    buttonList.forEach(button => {
        button.addEventListener('click', () => {
            deleteData(button.parentNode.id);
        })
    })
}

//create function to add items
const createAddFunction = () => {
    const form = document.getElementById('inputform');
    form.addEventListener("submit", (e) => {
        if (form.input.value !== '') {
            postData(form.input.value);
        }
        else {
            alert(`Can't add empty task`)
        }
        e.preventDefault();
    })
}

//create function to update status
const createUpdateStatus = () => {
    const checkboxes = Array.from(document.getElementsByClassName('checkbox'));
    checkboxes.forEach(box => {
        box.addEventListener("change", () => {

            //define variables in function
            id = box.parentNode.id;
            value = box.nextSibling.value;
            status = box.checked;

            //add strike class
            if (box.checked) {
                box.nextSibling.classList.add("striked")
            } else {
                box.nextSibling.classList.remove("striked")
            }

            //perform API update
            putCheckbox(id, value, status)
        })
    })
}

//create function for updating task value
const createUpdateValue = () => {
    const textList = Array.from(document.getElementsByClassName("text"));
    textList.forEach(text => {
        text.addEventListener("change", () => {
            id = text.parentNode.id;
            value = text.value;
            status = text.previousSibling.checked;
            putCheckbox(id, value, status)
        })

    })
}