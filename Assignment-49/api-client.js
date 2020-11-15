const baseUrl = 'https://jsonbox.io/box_f7adf92089a1ced936ae'

//getting data from server
const getData = async () => {
    const result = await fetch(baseUrl, { method: "GET" })
        .then(response => response.json())
        .catch(error => console.log(error + "error"))
    console.log("list created")
    return result
}

//deleting element
const deleteData = async (data) => {
    const result = await fetch(baseUrl + "/" + data, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json())
        .catch(error => console.log(error + "error"))
    console.log(result)
}

//posting new element
const postData = async (data) => {
    const result = await fetch(baseUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "description": data, "done": "false" })
    })
        .then(response => response.json())
        .catch(error => console.log(error + "error"))
    console.log(`Item "${result.description}" created`)
    return result
}

//changing element
const putCheckbox = async (id, data, status) => {
    const result = await fetch(baseUrl + "/" + id, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "description": data, "done": status })
    })
        .then(response => response.json())
        .catch(error => console.log(error + "error"))
    console.log(result)
}
