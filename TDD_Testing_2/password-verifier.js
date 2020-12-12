const hasRightLength = str => str.length < 9;
const isNotNull = str => str !== null;
const hasUpperCase = str => /(?=.*[A-Z])/.test(str);
const hasLowerCase = str => /(?=.*[a-z])/.test(str);
const hasDigit = str => /(?=.*[0-9])/.test(str);

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCase(password),
        hasLowerCase(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCase(password);

    return result;
};


module.exports = {
    hasRightLength,
    isNotNull,
    hasUpperCase,
    hasLowerCase,
    hasDigit,
    verifyPassword
}