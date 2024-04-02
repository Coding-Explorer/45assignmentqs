// Q15. Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating 
// the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it
// with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

//01

let guestArr1: string[]= ["Faheem", "Naveed", "Tanweer"];
let cannotattend: string = "Faheem";

console.log(cannotattend + " " + "can not attend the dinner");

let newGuest1: string = "shabbir";
guestArr1[guestArr1.indexOf(cannotattend)] = newGuest1;

for (let guest of guestArr1) {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}

//02

let guestArr2: string[] = ["Fiza", "Sameer", "Maheen"];
const guestCannotMakeIt: string = guestArr2[1]; // Assume the second guest can't make it

// Print invitations to each person on the original guest list
for (let guest of guestArr2) {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}

console.log(`Unfortunately, ${guestCannotMakeIt} can't make it to dinner.`);

// Replace the guest who can't make it with a new person
guestArr2[1] = "Saira"; // Sameer with Saira

// Print invitations to each person on the updated guest list
for (let guest of guestArr2) {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}
