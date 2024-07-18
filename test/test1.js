/* Sum Of Two in Array
Task: Implement a JavaScript function that, given an array of integers and a target integer,
returns whether any two integers in the array sum up to the target number.
Example:
Input: [1, 3, 5, 7, 16, 4], Target: 8, Output: true.
Input: [1, 3, 5, 7, 16, 4], Target: 12, Output: true.
Input: [1, 3, 5, 7, 16, 4], Target: 18, Output: false.
Input: [12, 17, 14, 11, 19, 8], Target: 20 Output: true */

//1. Make a function with 2 arguments
function sumOfTwo(inpArr, target) {
  //Loop through each element in the array
  for (let i = 0; i < inpArr.length; i++) {
    //Loop again through each element in the array that come after it
    for (let j = i + 1; j < inpArr.length; j++) {
      //Check if the sum of the two elements in the input array is equal to the target
      if (inpArr[i] + inpArr[j] === target) {
        //If the sum if the 2 elements is equal to the target then return true
        return true;
      }
    }
  }
  //If the sum is not equal to the target then return false
  return false;
}

//To sum up the conclusion : This function will check all element in the array and pick 2 number sum together
//And check with the target number, if equal to then the result will be true and if not it will be false

console.log(sumOfTwo([1, 3, 5, 7, 16, 4], 8));
console.log(sumOfTwo([1, 3, 5, 7, 16, 4], 12));
console.log(sumOfTwo([1, 3, 5, 7, 16, 4], 18));
console.log(sumOfTwo([12, 17, 14, 11, 19, 8], 20));
