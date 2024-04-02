// Q15. Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating 
// the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it
// with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
//01
var guestArr1 = ["Faheem", "Naveed", "Tanweer"];
var cannotattend = "Faheem";
console.log(cannotattend + " " + "can not attend the dinner");
var newGuest1 = "shabbir";
guestArr1[guestArr1.indexOf(cannotattend)] = newGuest1;
for (var _i = 0, guestArr1_1 = guestArr1; _i < guestArr1_1.length; _i++) {
    var guest = guestArr1_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us!"));
}
//02
var guestArr2 = ["Fiza", "Sameer", "Maheen"];
var guestCannotMakeIt = guestArr2[1]; // Assume the second guest can't make it
// Print invitations to each person on the original guest list
for (var _a = 0, guestArr2_1 = guestArr2; _a < guestArr2_1.length; _a++) {
    var guest = guestArr2_1[_a];
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us!"));
}
console.log("Unfortunately, ".concat(guestCannotMakeIt, " can't make it to dinner."));
// Replace the guest who can't make it with a new person
guestArr2[1] = "Saira"; // Sameer with Saira
// Print invitations to each person on the updated guest list
for (var _b = 0, guestArr2_2 = guestArr2; _b < guestArr2_2.length; _b++) {
    var guest = guestArr2_2[_b];
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us!"));
}
