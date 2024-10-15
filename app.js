//importing functions from other js files
import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

//logging math and string functions
console.log('Add: ', add(5, 3));                    
console.log('Uppercase: ', toUpperCase('hello'));   
console.log('Multiply: ', multiply(4, 5));          

//array functions for finding max value and reversing array
console.log('Max: ', findMax([1, 2, 3, 4, 5]));     
console.log('Reversed: ', reverseArray([1, 2, 3]));

addAndLogUpper(10, 20);  

//combining array and math to find max number in array, multiply by 10 and display in uppercase
const numbers = [3, 7, 2, 8, 4];
const maxNumber = findMax(numbers); 
const multiplier = 10;
const finalResult = toUpperCase(multiply(maxNumber, multiplier).toString());
console.log('Final Result: ', finalResult);
