const log = console.log;

//for loop

myArray = [1, 2, 4, 7, 9];
total = 0;

for(var i = 0; i < myArray.length; i++) {
  log(total += myArray[i]);
}

//nesting for loops

function multiplyAll(array) {
  var product = 1;

  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array[i].length; j++) {
      product *= array[i][j];
    }
  }

  return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);