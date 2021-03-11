const checkAge = (age) => {
    if (age >= 18){
        return true
    }
    else {
        return false
    }
}
const greetMe = (age) => {
    if (checkAge(age) === true) {
        return "Hello there"
    }
    else {
        return "Hey kiddo"
    }
}

//console.log(greetMe(12))

const getVat = (num) => {
    return num * 0.21
}

const getPrice = (num) => {
    return num + getVat(num)
}

getPriceArray = (num) => {
    return [num, getPrice(num)]
}

console.log(getPriceArray(1000))