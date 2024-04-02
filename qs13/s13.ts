// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples.
// Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”


// 01

let vehicles: string[] = ["Toyota Corolla", "Toyota Hilux", "Toyota Glanza", "Toyota Fortuner"]

vehicles.map((items) => console.log(`I would like to own a ${items}`));

// 02

let transportation: string[] = ["car", "motorcycle", "bicycle", "bus", "train"];

// Print statements about each transportation mode
for (let index1 of transportation) {
  console.log(`I would like to own a ${index1}.`);
}
