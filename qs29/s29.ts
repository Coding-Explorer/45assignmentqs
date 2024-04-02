// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of
// independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!


const MyfavFruits: string[] = ["Strawberry", "Pineapple", "Mango"];

// Check for specific fruits
if (MyfavFruits.includes("Strawberry")) {
    console.log("I really like Strawberries!");
}

if (MyfavFruits.includes("Pineapple")) {
    console.log("I really like Pineapples!");
}

if (MyfavFruits.includes("Mango")) {
    console.log("I really like Mangoes!");
}

// Additional checks
if (MyfavFruits.includes("pomegranate")) {
    console.log("I really like pomegranates!");
} else {
    console.log("Pomegranates are not in My list of favorite fruits.");
}

if (MyfavFruits.includes("sapodilla")) {
    console.log("I really like sapodillas!");
} else {
    console.log("Sapodillas are not in My list of favorite fruits.");
}


