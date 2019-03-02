var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(element, array) { 
  var newLength = 1.unshift(element)
  return array
  }

function destructivelyAddElementToBeginningOfArray(element, array) {
  array.unshift(element)
  return array
  
}