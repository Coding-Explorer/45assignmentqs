// Q20.Think of something you could store in a array. For example, you could make a list of mountains,
// rivers, countries, cities, languages, or anything else you’d like. Write a program that
// creates a list containing these items.
//01
var languages = [
    "Pashto", "Punjabi", "Persian", "English"
];
languages.map(function (item) {
    return console.log(item);
});
//02
// List of mountains
var mountains = ["Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
// Print the list of mountains
console.log("List of Mountains:");
for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
    var mountain = mountains_1[_i];
    console.log(mountain);
}
