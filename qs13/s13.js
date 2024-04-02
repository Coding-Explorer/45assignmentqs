// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples.
// Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
// 01
var vehicles = ["Toyota Corolla", "Toyota Hilux", "Toyota Glanza", "Toyota Fortuner"];
vehicles.map(function (items) { return console.log("I would like to own a ".concat(items)); });
// 02
var transportation = ["car", "motorcycle", "bicycle", "bus", "train"];
// Print statements about each transportation mode
for (var _i = 0, transportation_1 = transportation; _i < transportation_1.length; _i++) {
    var index1 = transportation_1[_i];
    console.log("I would like to own a ".concat(index1, "."));
}
