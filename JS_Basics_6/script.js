/*
//Part A
makeCheeseSandwich() {
    Place slice of bread;
    Add Cheese;
    Place another slice of bread;
}
*/

/*function makeCheeseSandwich() {
    console.log('Place slice of bread');
    console.log('Add Cheese');
    console.log('Place another slice of bread');
}
//Part B
makeCheeseSandwich();


function makeCheeseSandwich(topping) {
    console.log('There you go, a sandwich with' + ' ' + topping + '.');
}

makeCheeseSandwich('ham');

//I declare the function before the {. I call the function outside of the function body.

makeCheeseSandwich('cheese');
*/
//Part C
/*
function calculateDiscountedPrice(totalAmount, discount) {
   return (totalAmount - discount).math.round();
}
*/
//Part D
function calculateDiscountedPriceTwo(totalAmount, discount) {
    if (totalAmount > 25) {
        return Math.round(totalAmount - discount);
    }
    else 
        return totalAmount;
}

console.log(calculateDiscountedPriceTwo(25, 5));
