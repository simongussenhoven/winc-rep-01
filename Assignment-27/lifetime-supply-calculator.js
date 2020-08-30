let calculateSupply = function(age, amountPerDay) {
    let maxAge = 100;
    let yearsLeft = maxAge - age;
    let calculatedAmount = yearsLeft * amountPerDay * 365; 
    console.log("You will need " + Math.round(calculatedAmount) + " to last you until the ripe old age of " + maxAge)
}

calculateSupply(34.4, 2)
calculateSupply(58.8, 4)
calculateSupply(2.8, 7)