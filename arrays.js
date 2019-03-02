var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(element, array) { 
  console.log(array.unshift(4, 5)) ;
  return array ;
  }

function destructivelyAddElementToBeginningOfArray(element, array) {
  array.unshift(element)
  return array
  
}