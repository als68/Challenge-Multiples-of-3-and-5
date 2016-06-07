/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;

  // do your work here

/*var threeSum;
var fiveSum;

// this is how many even times 3 goes into n
var flooredThree = Math.floor(multThree);
console.log(flooredThree);

for(i = 0; i < n; i++) {
  var isMultThree = i % 3 === 0;
  if (isMultThree === true) {
      sum = sum + i;
  }
}

// this is how many even times 5 goes into n
var flooredFive = Math.floor(multFive);
console.log(multFive);

for(i = 0; i < n; i++) {
  fiveSum = 5 * i;
  sum += fiveSum;
}

  sum = threeSum + fiveSum;

*/

for(i = 0; i < n; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

  return sum;
};