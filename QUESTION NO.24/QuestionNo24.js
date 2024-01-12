// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to// Tests for equality and inequality with strings
var string1 = "Hello";
var string2 = "hello";
console.log(string1 === string2); // false (Case-sensitive equality check)
console.log(string1 !== string2); // true (Case-sensitive inequality check)
// Tests using the lower case function
var stringWithMixedCase = "HeLLo";
console.log(stringWithMixedCase.toLowerCase() === string1.toLowerCase()); // true (Case-insensitive equality check after converting to lowercase)
var num1 = 10;
var num2 = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
var condition1 = true;
var condition2 = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);
var array1 = [1, 2, 3, 4, 5];
var itemToCheck1 = 3;
console.log(array1.includes(itemToCheck1));
var itemToCheck2 = 6;
console.log(!array1.includes(itemToCheck2));
