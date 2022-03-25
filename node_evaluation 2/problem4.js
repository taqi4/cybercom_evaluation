//Question 4: Create a function called “abs” that returns the absolute value of the number passed to it as an argument.
//The positive version of a negative number is its absolute value, whereas the absolute value of a positive number (or zero) is the number itself.

console.log(abs(-5));// 5
console.log(abs(0));// 0
function abs(num){
    return num>=0 ? num : -num; //returns absolute value
}