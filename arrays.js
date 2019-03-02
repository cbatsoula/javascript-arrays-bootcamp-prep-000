var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(element, array) { 
  element.unshift(array)
  return array
  }

function destructivelyAddElementToBeginningOfArray(element, array) {
  array.unshift(element)
  return array
  
}