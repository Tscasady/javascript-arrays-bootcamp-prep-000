function addElementToBeginningOfArray(array, element){
  newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}

function addElementtoEndOfArray(array, element){
  var newArray = array.push(element)
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}