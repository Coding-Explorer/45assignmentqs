//Q24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one False
// result for each of the following:

// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


// 1.(Tests for equality and inequality with strings)
const string1: string = "bus";
const string2: string = "bike";
console.log("• Tests for equality and inequality with strings\n")
console.log(string1 === string2);
console.log(string1 !== string2);

// 2.(Tests using the lower case function)
const uppercaseString: string = "INTELLIGENCE";
console.log("• Tests using the lower case function\n")
console.log(uppercaseString.toLowerCase() === "intelligence");
console.log(uppercaseString.toLowerCase() === "InTellIgence\n");

// 3.("Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to")
console.log("• Tests using the Numerical tests involving equality and inequality, greater than and less than,\n greater than or equal to, and less than or equal to")
const num1: number = 200;
const num2: number = 100;
console.log(num1 === num2,"equality");
console.log(num1 !== num2,"inequality");
console.log(num1 < num2,"less than");
console.log(num1 > num2,"greater than");
console.log(num1 <= num2,"less than or equal to");
console.log(num1 >= num2,"greater than or equal to\n");

//4.(Tests using "and" and "or" operators)

const one: boolean = true;
const two: boolean = false;
const three: boolean = true;
const four: boolean = false;

console.log("• Tests using && operator ")
console.log(one&&three,"Because both conditions are same");
console.log(one&&two,"Because both conditions are not same\n");

console.log("• Tests using || operator ")
console.log(one||three,"Because both conditions are same");
console.log(one||two,"Because one condition is False but at least one condition is true");
console.log(two||four,"Because both conditions are false\n");


const fruits: string[] = ["Pineapple", "Strawberry", "Mango", "Peach"];

//• Test whether an item is or not in a array

// Test 1
console.log("• Test whether an item is in a array")

console.log(fruits.some(fruit => fruit === "Pineapple")); // true (because "Grapes" are in the array)

// Test 2
console.log("• Test whether an item is not in a array")

console.log(fruits.some(fruit => fruit === "pineapple")); // false (because "grapes" are not in the array, and some is case-sensitive)
