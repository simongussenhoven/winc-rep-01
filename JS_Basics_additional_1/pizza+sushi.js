const makePizza = (dough, ingredient1, ingredient2) => {
    return `${dough} pizza with ${ingredient1} and ${ingredient2}`
}

// console.log(makePizza ("wheat", "salami", "tomato"));
// console.log(makePizza ("sourwheat", "salami", "cheese"));
// console.log(makePizza ("cement", "chicken", "cardboard"));

const makeSushi = (base, ingredient1, ingredient2) => {
    return `${base} sushi with ${ingredient1} and ${ingredient2}`
}

const makeOrder = (orders) => {
    orders.forEach(order => {
        if (order.type === "pizza"){
            console.log(makePizza(order.base, order.ing1, order.ing2))
        }
        else {
            console.log(makeSushi(order.base, order.ing1, order.ing2))
        }
    })
}

const totalOrder = [
    {type: "sushi", base: "rice", ing1: "salmon", ing2: "avocado"},
    {type: "sushi", base: "rice", ing1: "salmon", ing2: "avocado"},
    {type: "sushi", base: "rice", ing1: "salmon", ing2: "avocado"},
    {type: "pizza", base: "rice", ing1: "salmon", ing2: "avocado"},
    {type: "pizza", base: "rice", ing1: "salmon", ing2: "avocado"},
]

makeOrder(totalOrder)