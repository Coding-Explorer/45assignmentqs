// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//01
var GuestList = ["Faheem", "Naveed", "Tanweer"];
GuestList.map(function (item) { return (console.log("Dear ".concat(item, ", You Are Invited To the Dinner"))); });
//02
var guestList = ["Faheem", "Naveed", "Tanweer"];
// Print invitations to each person on the guest list
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var list1 = guestList_1[_i];
    console.log("Dear ".concat(list1, ", you are invited to dinner. Please join us!"));
}
