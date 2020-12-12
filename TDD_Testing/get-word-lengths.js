const getWordLengths = function (someWords) {
    const words = Object.values(someWords);
    const newArray = words.map(word => {
        return word.length;
    })
    return newArray
}
module.exports = getWordLengths;