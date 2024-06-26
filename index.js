// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum(number1, number2) {
   return (number1+number2);
  
}
console.log(calculateSum(6, 6));

// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

function isEven(num){
  return num % 2 === 0 ;
}
console.log(isEven(14));

// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

function findMax(arr) {
  let maxNum = arr[0];
  for(let i=1; i< arr.length; i++){
    if(arr[i] > maxNum){
      maxNum = arr[i];
    }
  }
  return maxNum;
}
console.log(findMax([-1, -0.5, 2]));

// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

function reverseString(mainString) {
  let reversed = mainString.split('').reverse().join('');
  return reversed ;
  
}
console.log(reverseString("Parvez Alom Pabel"));

// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

function filterOddNumbers(arr) {
  
  let odd = arr.filter(n => n%2)
  return odd;
    
  }
  

console.log(filterOddNumbers([4,5,6,7,8,2]) );

// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements
function sumArray(arr) {
  
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    sum = sum + arr[i];
    
  }
  return sum;
  }
console.log(sumArray([4,5,6,7,8,4]) );

// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
function sortArray(arr) {
  const sortedArray = [...arr];
  sortedArray.sort((a, b) => a - b) ; 
  return sortedArray;
}
console.log(sortArray([5, 6, 4, -1, 9, 55, 99]));
// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized.
function capitalizeFirstLetter(str) {
  const capString = str.charAt(0).toUpperCase() + str.slice(1);
return capString;  
}
console.log(capitalizeFirstLetter("i love my Bangladesh"));