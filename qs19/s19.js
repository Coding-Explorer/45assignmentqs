// Q19. Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
var DinnerGuests = ["Faheem", "Naveed", "Tanweer"];
DinnerGuests.map(function (elements) { return (console.log("Dear ".concat(elements, ", You Are Invited To the Dinner"))); });
// Print the number of people you are inviting to dinner
console.log("Total number of people invited to dinner: ".concat(DinnerGuests.length));
