/* Sum of All Primes
Task: Write a JavaScript function that takes a number n and returns the sum of all prime
numbers up to and including n.
Example:
Input: 10, Output: 17 (since the prime numbers up to 10 are 2, 3, 5, 7).
Input: 59, Output: 440 (since the prime numbers up to 10 are 2, 3, 5, 7..... To 59). */

// Set a function to check if a number is prime
function isPrime(n) {
    //numbers less than or equal to 1 are not prime numbers so return will be false
    if (n <= 1) {
        return false;
    }
    //Use the square root to loop (n)
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;//if n is divisible by i is not prime numbers, return false
        }
    }
    return true; // n is prime number, return true
}

// Set a function to find the sum of all prime numbers of n
function findPrimesNumber(n) {
    //set the sum to 0 so the sum of prime numbers will be added to it
    let sum = 0;
    //loop start from 2 to n(2 is the smallest prime number and 0 , 1 is not prime number)
    for (let i = 2; i <= n; i++) {
        // check if i is prime
        if (isPrime(i)) {
            // add i to sum if it a prime number
            sum += i;
        }
    }
    return sum; //return the result of the sum
}

const input = 100;

console.log(findPrimesNumber(input));