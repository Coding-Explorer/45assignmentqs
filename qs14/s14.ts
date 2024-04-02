// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


//01

let GuestList: string[] = ["Faheem", "Naveed", "Tanweer"]

GuestList.map((item) => (
    console.log(`Dear ${item}, You Are Invited To the Dinner`)
))


//02

let guestList: string[] = ["Faheem", "Naveed", "Tanweer"];

// Print invitations to each person on the guest list
for (let list1 of guestList) {
  console.log(`Dear ${list1}, you are invited to dinner. Please join us!`);
}
