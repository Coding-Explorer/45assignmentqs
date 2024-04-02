//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, but each message should be 
// personalized with the person’s name.
var names = ["Adnan Khan", "Asif Khan", "Babar Khan", "Ismail Khan"];
var message = "Do you like to play Cicket ";
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);
//02
var nameS = ["Tasleem", "Rehan", "Bilal", "Ayaz", "Danish"];
// Print personalized greetings for each person
for (var _i = 0, nameS_1 = nameS; _i < nameS_1.length; _i++) {
    var index = nameS_1[_i];
    console.log("Hello, ".concat(index, ", How are you doing today!"));
}
