// Q16. More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program 
// informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var guestListN = ["Fiza", "Sameer", "Maheen"];
var guestcannotMakeIt = guestListN[1]; // Assume the second guest can't make it
// Print invitations to each person on the original guest list
for (var _i = 0, guestListN_1 = guestListN; _i < guestListN_1.length; _i++) {
    var guest = guestListN_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us!"));
}
console.log("Unfortunately, ".concat(guestcannotMakeIt, " can't make it to dinner."));
// Replace the guest who can't make it with a new person
guestListN[1] = "Saira"; // Sameer with Saira
// Print invitations to each person on the updated guest list
for (var _a = 0, guestListN_2 = guestListN; _a < guestListN_2.length; _a++) {
    var guest = guestListN_2[_a];
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us!"));
}
// Announce the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add three new guests
guestListN.unshift("Bilal"); // Add to the beginning
guestListN.splice(2, 0, "Rehmaan"); // Add to the middle
guestListN.push("Rabia"); // Add to the end
// Print invitations to each person on the final guest list
for (var _b = 0, guestListN_3 = guestListN; _b < guestListN_3.length; _b++) {
    var guest = guestListN_3[_b];
    console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us!"));
}
