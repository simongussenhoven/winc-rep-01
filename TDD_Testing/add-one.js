const addOne = function (numbers) {
  const values = Object.values(numbers);
  const newArray = values.map(value => {
    return ++value
  })
  return newArray
}

module.exports = addOne;