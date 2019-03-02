var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(element, array){
  var newLength = array.unshift(element) 
  return [element,...array];
}

function destructivelyAddElementToBeginningOfArray(element, array){
  theArray.unshift(theElement)
  return array
}

function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(element, array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function removeElementFromEndOfArray(array){
  return array.length - 1
}