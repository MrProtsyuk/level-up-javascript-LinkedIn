// Write your code here
function coffeeDate(coffeeArray) {
  var coffeeSum = coffeeArray.reduce(
    (totalCoffees, numCoffees) => (totalCoffees += numCoffees)
  );
  return `The total coffee bill is $${coffeeSum * 1.25}`;
}

console.log(coffeeDate([2, 5, 7, 1, 4]));