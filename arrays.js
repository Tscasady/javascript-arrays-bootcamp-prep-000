function addElementToBeginningOfArray(array,element){
  var newArray = array.unshift(element)
  return newArray
}

var destructiveAddElementToBeginningOfArray = function destroy(c,d) {
  return c.unshift(d)
}
