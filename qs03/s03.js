// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in
// lowercase, uppercase, and titlecase.
var firstName = "Rabail";
console.log("".concat(firstName.toLocaleLowerCase(), "\t\"lowercase\""));
console.log("".concat(firstName.toLocaleUpperCase(), "\t\"UPPERCASE\""));
console.log("".concat(firstName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }), "\t\"Title Case\""));
