/* Custom Sort Function
Task: Write a JavaScript function that sorts an array of numbers in ascending order, but places
all odd numbers before even numbers.
Example:
Input: [4, 2, 5, 7, 1, 6], Output: [1, 5, 7, 2, 4, 6].
Input: [25, 40, 14, 91, 31, 22, 49, 13, 6], Output: [13, 25, 31, 49, 91, 6, 14, 22, 40]. */

function sorted(arr) {
  //make the empty array for the off and even number
  let odd = [];
  let even = [];


  arr.forEach((num) => {
    //check if the number is odd push to odd array
    if (num % 2 !== 0) {
      odd.push(num);
    } else {
      //check if the number is even push to even array
      even.push(num);
    }
  });

  //This is to sort the odd and even array
  odd.sort((a, b) => a - b);
  even.sort((a, b) => a - b);

  //Connect the odd and even array
  return odd.concat(even);
}

//This is the example input
const inputArr = [4, 2, 5, 7, 1, 6];
const inputArr2 = [25, 40, 14, 91, 31, 22, 49, 13, 6];

//Call sorted function on each input array
const sortedArr = sorted(inputArr);
const sortedArr2 = sorted(inputArr2);

//Out put
console.log(sortedArr, sortedArr2);
