const log = console.log;

myArray = [1, 2, 4, 7, 9];
total = 0;

for(var i = 0; i < myArray.length; i++) {
  log(total += myArray[i]);
}