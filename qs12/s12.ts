//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, but each message should be 
// personalized with the person’s name.


let names: string[] = ["Adnan Khan", "Asif Khan", "Babar Khan", "Ismail Khan"];
let message: string = "Do you like to play Cicket ";
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);

//02

let nameS: string[] = ["Tasleem", "Rehan", "Bilal", "Ayaz", "Danish"];

// Print personalized greetings for each person
for (let index of nameS){ 

  console.log(`Hello, ${index}, How are you doing today!`);
}