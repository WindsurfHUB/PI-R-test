/* Largest Number
Task: Given a list of non-negative integers, arrange them such that they form the largest
possible number.
Example
Input: [10, 2, 13, 7], Output: "721310".
Input: [21, 36, 8, 45], Output: “8453621” */

function largestNumber(nums) {
  //convert the array to string
  let numStrings = [];
  for (let i = 0; i < nums.length; i++) {
    numStrings.push(nums[i].toString());
  }

  //Custom sort to arrange in order to form largest number
  numStrings.sort(function (a, b) {
    // connect a pair of numbers
    let order1 = a + b;
    let order2 = b + a;
    //compare the result of orders
    if (order1 > order2) {
      return -1;
    } else if (order1 < order2) {
      return 1;
    } else {
      return 0;// incase of equal orders
    }
  });
  //sorted string to from the largest number
  let largestNumString = "";
  for (let i = 0; i < numStrings.length; i++) {
    largestNumString += numStrings[i];
  }

  //handle case where largest numbers are 0
  if (largestNumString[0] === "0") {
    return "0";
  }

  //return the largest number as a string
  return largestNumString;
}

//Example usage
console.log(largestNumber([10, 2, 13, 7, 6]));
console.log(largestNumber([21, 36, 8, 45]));
