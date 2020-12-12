const findNeedle = function (words) {
    const allWords = Object.values(words)
    return allWords.indexOf("needle")
};

module.exports = findNeedle;