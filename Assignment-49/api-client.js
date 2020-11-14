const baseUrl = 'https://jsonbox.io/box_f7adf92089a1ced936ae'

const post = { method: "POST" }

const getData = async () => {
    const result = await fetch(baseUrl, { method: "GET" })
        .then(response => response.json())
        .catch(error => console.log(error + "error"))
    return result
}

const deleteData = async (data) => {
    const result = await fetch(baseUrl + "/" + data, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json())
        .catch(error => console.log(error + "error"))
    console.log(result);
    location.reload();
    return result
}

const postData = async (data) => {
    const result = await fetch(baseUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "description": data, "done": "false" })
    })
        .then(response => response.json())
        .catch(error => console.log(error + "error"))
    location.reload();
}

const putCheckbox = async (id, data, status) => {
    const result = await fetch(baseUrl + "/" + id, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "description": data, "done": status })
    })
        .then(response => response.json())
        .catch(error => console.log(error + "error"))
}
