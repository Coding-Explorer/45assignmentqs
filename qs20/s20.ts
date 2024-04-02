// Q20.Think of something you could store in a array. For example, you could make a list of mountains,
// rivers, countries, cities, languages, or anything else you’d like. Write a program that
// creates a list containing these items.

//01

let languages:string[] =[
    "Pashto", "Punjabi","Persian","English"];
    languages.map((item) => 
    console.log(item));

 //02

    // List of mountains
const mountains: string[] = ["Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];

// Print the list of mountains
console.log("List of Mountains:");
for (const mountain of mountains) {
  console.log(mountain);
}
