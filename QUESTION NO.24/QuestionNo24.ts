// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to// Tests for equality and inequality with strings

let string1: string = "Hello";
let string2: string = "hello";

console.log(string1 === string2); 
console.log(string1 !== string2); 


let stringWithMixedCase: string = "HeLLo";

console.log(stringWithMixedCase.toLowerCase() === string1.toLowerCase()); 


let num1: number = 10;
let num2: number = 5;

console.log(num1 === num2); 
console.log(num1 !== num2); 
console.log(num1 > num2);   
console.log(num1 < num2);   
console.log(num1 >= num2);  
console.log(num1 <= num2);  

let condition1: boolean = true;
let condition2: boolean = false;

console.log(condition1 && condition2); 
console.log(condition1 || condition2); 


let array1: number[] = [1, 2, 3, 4, 5];
let itemToCheck1: number = 3;

console.log(array1.includes(itemToCheck1)); 


let itemToCheck2: number = 6;

console.log(!array1.includes(itemToCheck2)); 

