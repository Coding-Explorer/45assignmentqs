// Q17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that
// you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them know
// you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end of your program.
var guestListnew = ["Fiza", "Sameer", "Maheen"];
var guestcannotmakeIt = guestListnew[1]; // Assume the second guest can't make it
// Print invitations to each person on the original guest list
for (var _i = 0, guestListnew_1 = guestListnew; _i < guestListnew_1.length; _i++) {
    var guest = guestListnew_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us!"));
}
console.log("Unfortunately, ".concat(guestcannotmakeIt, " can't make it to dinner."));
// Replace the guest who can't make it with a new person
guestListnew[1] = "Saira"; // Sameer with Saira
// Print invitations to each person on the updated guest list
for (var _a = 0, guestListnew_2 = guestListnew; _a < guestListnew_2.length; _a++) {
    var guest = guestListnew_2[_a];
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us!"));
}
// Announce the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add three new guests
guestListnew.unshift("Bilal"); // Add to the beginning
guestListnew.splice(2, 0, "Rehmaan"); // Add to the middle
guestListnew.push("Rabia"); // Add to the end
// Print invitations to each person on the final guest list
for (var _b = 0, guestListnew_3 = guestListnew; _b < guestListnew_3.length; _b++) {
    var guest = guestListnew_3[_b];
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us!"));
}
// Q17. Shrinking Guest List
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people.");
// Remove guests until only two names remain
while (guestListnew.length > 2) {
    var removedGuest = guestListnew.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print invitations to the two remaining people
for (var _c = 0, guestListnew_4 = guestListnew; _c < guestListnew_4.length; _c++) {
    var guest = guestListnew_4[_c];
    console.log("Dear ".concat(guest, ", you are still invited to dinner. Please join us!"));
}
// Empty the list
guestListnew = [];
console.log("Final guest list:", guestListnew);
