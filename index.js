////////////////////////////
//     Challenge 1 ✅
////////////////////////////

// FIND MODE

// Given an array, return its mode (the number that appears most often)
// If there is a tie, return the greater number of tied modes.
// ex. mode([1,1,2,2,3,3,2,4,5]) === 2 // true because 2 appears most often in the array (the number 2 appears 3 times)
// ex. mode([1,1,1,3,3,3]) === 3 // true, because 3 and 1 are tied as the mode, but 3 > 1 and the mode function will return the greater of the mode values
function mode(array) {
    const obj = {};
  array.forEach ((el) => {
    if (!obj[el]) obj[el] =0;
    obj[el] ++;
  });
  let result = 0;
  let max =0;
  
  for (let key in obj) {
    if (obj[key] > max) {
      result = [key];
      max = obj[key];
    }
  }
  return parseInt(result)
}


// Extension: solve this in 0(n) time

function modeTests() {
  console.log(mode([1,2,2,1,1,3, 7, 3]), ' -> 1');
  console.log(mode([1]), ' ->1');
  console.log(mode([2, 2, 2, 2, 3, 3, 3]), ' -> 2');
}

//modeTests() // uncomment to test!

////////////////////////////
//     Challenge 2 ✅
////////////////////////////

// FIND MEDIAN

// Given an array, return its median (the element whose value falls in the middle of all other values in the array)
// Ex: [1, 2, 3, 4, 5], median is 3
// Ex: [10, 4, 7, 6, 1], median is 6

function median(array) {
let output =  array.reduce((a, b) => a + b)
return Math.round(output/array.length)
}

function medianTests() {
  console.log(median([1, 2, 3, 4, 5]), ' -> 3');
  console.log(median([10, 4, 7, 6, 1]), ' -> 6');
  console.log(median([2, 2, 2, 2, 3, 3, 3]), ' -> 2');
}

 medianTests() // uncomment to test!


////////////////////////////
//     Challenge 3
////////////////////////////

// IS PRIME

// Modify the function so that it return whether a number is prime

function isPrime(num) {
if (num===2){return true;}
if (!Number.isInteger(num) || num<2 || !(num%2==0) ) {return false;}
}

// Extension: solve this in 0(logn) time

function primeTests() {
  console.log(isPrime(1), ' -> false');
  console.log(isPrime(2), ' -> true');
  console.log(isPrime(3), ' -> true');
  console.log(isPrime(4), ' -> false');
  console.log(isPrime(25), ' -> false');
}

primeTests() // Uncomment to check code!

////////////////////////////
//     Challenge 4
////////////////////////////

// RANSOM NOTE

// Given two strings, write a function that determines if you can build the second string with the characters of the first
// If you have more than one of a certain character in the second string, you must have at least as many of those characters in the first
// Imagine a ransom note (second string) constructed from cut-out letters from a magazine (first string). Except you also need to cut out spaces for some reason.
// Capitalization matters!



function ransomNote(magazine, message) {

}


function ransomTests() {
  console.log(ransomNote('this is a string!!!', 'is this a string!!'), ' -> true');
  console.log(ransomNote('this is a string!!', 'this is a string!!!'), ' -> false');
  console.log(ransomNote('THIS IS A STRING', 'this is a string'), ' -> false');
  console.log(ransomNote('this is a string', ''), ' -> true');
}

// ransomTests() // Uncomment to check code!


////////////////////////////
//     Challenge 5 ✅
////////////////////////////

// DELETE DUPS

// Write a function that takes in an array and returns a new array with duplicates removed

function deleteDups(arr) {
  let newArr = [...new Set(arr)];
  return newArr;
}

// Extension: solve in 0(n) time

function dupsTests() {
  console.log(deleteDups(['a', 'a', 'a', 'a', 'a']), ' -> [a]');
  console.log(deleteDups(['a', 'b', 'c', 'd']), ' -> [a, b, c, d]');
  console.log(deleteDups(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']), ' -> [a, b, c, d]');
}

dupsTests() // Uncomment to check code!

////////////////////////////
//     Challenge 6
////////////////////////////

// FIND UNIQUE === NOT DONE!

// Write a function that takes in array in which every number appears exactly twice, 
// except for one number which appears exactly once. 
// The function should return the number that appears exactly once. 
// ex. uniqueNumber([1,1,4,2,3,2,3]) should return the number 4 since it is the number that appears exactly once in the array

function uniqueNumber(array) {
let sortedArr = array.sort((a,b)=>a-b)
  for (let i=1; i<sortedArr.length; i++){
  if (sortedArr[i]===sortedArr[i-1]) {
    sortedArr.push(sortedArr[i],sortedArr[i-1])
  } 
}
return (sortedArr[i]);
}

function uniqueNumberTests() {
  console.log(uniqueNumber([1,2,2,1,3, 7, 3]), ' -> 7');
  console.log(uniqueNumber([1,2,2,1,3]), ' -> 3');
  console.log(uniqueNumber([1,2,2,1,3, 7, 3, 5, 5, 6, 6, 7, 9, 8, 9]), ' -> 8');
} 

uniqueNumberTests() // uncomment to test!

////////////////////////////
//     Challenge 7 ✅
////////////////////////////

// PALINDROME

// Modify the function so that it returns true if string is a palindrome (the string is the same forward and backwards)
// Otherwise, should return false
// The parameters entered may have punctuations and symbols, but they should not affect whether the string is a palindrome
// Ignore capitalization


// Hint: look up how to use regex in JS - specifically how to rip away all characters that aren't letters




function palindrome(string) {
  let clearString = string.toLowerCase().replace(/[^0-9a-z]/gi, '').split('');
  for (let i = 0; i < clearString.length/2; i++) {
    if (clearString[i] !== clearString[clearString.length -1 -i]) {  
      return false;
    } 
  }
  return true;
}

function palindromeTests() {
  console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna"), ' -> true');
  console.log(palindrome("llama mall"), ' -> true');
  console.log(palindrome("jmoney"), ' -> false');
}

palindromeTests() // uncomment to check code!


////////////////////////////
//     Challenge 8 ✅
////////////////////////////

// SORT

// implement your own function to sort an array
// What is its time complexity?
// Try implementing merge or quick sort

function sort(array) {
 let sorted = array.sort((a,b) => a - b);
 return sorted;
}


function sortTests() {
  console.log(sort([1, 2, 3, 4, 5]), ' -> [1, 2, 3, 4, 5]');
  console.log(sort([10, 4, 7, 6, 1]), ' -> [1, 4, 6, 7, 10]');
  console.log(sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), ' -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]');
}

sortTests() // uncomment to test!

////////////////////////////
//     Challenge 9 ✅
////////////////////////////

// Shuffle

// implement your own function to randomize an array - each element should have an equal chance of landing in any spot
// What is its time complexity?

function shuffle(array) {
 return array.sort(() => Math.random() - 0.5)
}

function shuffleTests() {
  console.log(shuffle([1, 2, 3, 4, 5]), ' -> ?');
  console.log(shuffle([10, 4, 7, 6, 1]), ' -> ?');
  console.log(shuffle([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), ' -> ?');
}

shuffleTests() // Determine a way to test this function!

////////////////////////////
//     Challenge 10 ✅
////////////////////////////

// FIND MISSING

// You are given an array of length n containing every number from 0 to n except for one missing number. Find that number!

// Challenge: give this function 0(n) time complexity, 0(1) space complexity

function findMissing(array) {
let sortedArr = array.sort((a,b)=>a-b);
let missingNum = [];
for (let i =1; i<sortedArr.length; i++){
  if (sortedArr[i] - sortedArr[i-1] ===1) {return true}
  if (sortedArr[i] - sortedArr[i-1]===2) {
    missingNum.push ((sortedArr[i] + sortedArr[i-1])/2)
    }
  }
 return missingNum;
}

function findMissingTests() {
  console.log(findMissing([0, 1, 2, 3, 4, 5, 7]), ' -> 6');
  console.log(findMissing([7, 5, 4, 3, 2, 1, 0]), ' -> 6');
  console.log(findMissing([0, 7, 1, 5, 2, 4, 3]), ' -> 6');
  console.log(findMissing([0, 7, 1, 6, 2, 4, 3]), ' -> 5');
}

findMissingTests() // Uncomment to test this function
