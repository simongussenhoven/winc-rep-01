const testNum = (num) => {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(num + ' = smaller than 10.')
        }
        else
            reject(num + ' = bigger than 10.')
    });
};

console.log(testNum(9));

const makeAllCaps = words => {
    return new Promise((resolve, reject) => {
        if (
            words.every(word => {
                return typeof word === 'string';
            })
        ) {
            resolve(
                sortWords(
                    words.map(word => {
                        return word.toUpperCase();
                    })
                )
            );
        } else {
            reject('Not a string!');
        }
    });
};

const sortWords = words => {
    return new Promise((resolve, reject) => {
        if (words) {
            resolve(words.sort());
        } else {
            reject('strings only!');
        }
    });
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

makeAllCaps(arrayOfWords)
    .then(sortWords(arrayOfWords))
    .then(result => console.log(result))
    .catch(error => console.log(error));

const theseAreNotWords = [1, 'hello', 9];


makeAllCaps(theseAreNotWords)
    .then(sortWords(theseAreNotWords))
    .then(result => console.log(result))
    .catch(error => console.log(error));