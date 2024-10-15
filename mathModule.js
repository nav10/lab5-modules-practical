import { toUpperCase } from './stringModule.js';

// Function to add two numbers
export function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
export function subtract(a, b) {
  return a - b;
}

// Default export for multiplication
export default function multiply(a, b) {
  return a * b;
}

// Function to add two numbers, convert result to uppercase, and log it
export function addAndLogUpper(a, b) {
  const result = add(a, b);
  console.log(toUpperCase(result.toString()));
}



  