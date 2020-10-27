const count = function (...args) {
    return args.reduce((acc, item) => {
        return acc + item
    })
}

console.log(count(1, 2, 3, 4, 5, 6))

const countMore = function (num1, num2, num3) {
    return num1 + num2 + num3;
}
const cijfers = [1, 2, 3]

console.log(countMore(...cijfers));
