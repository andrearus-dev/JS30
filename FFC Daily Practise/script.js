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
log(product);


//RECURSIONS - base case / recursive case 

function factorial(n) {
  if (n == 1 || n == 0) {
    return 1;
  } else 
  return n * factorial(n - 1) 
}

console.log(factorial(4));

function sum(arr, n) {
  if(n <= 0) { 
    return 0;
  } else {
    return sum(arr, n - 1);
  }
}

console.log