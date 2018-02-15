function addElementToBeginningOfArray(array, element){
  newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(c,d) {
  return [d, ...c]
}
