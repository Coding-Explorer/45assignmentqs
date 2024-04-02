// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in
// lowercase, uppercase, and titlecase.

let firstName: string = "Rabail";

console.log(`${firstName.toLocaleLowerCase()}\t"lowercase"`);
console.log(`${firstName.toLocaleUpperCase()}\t"UPPERCASE"`);
console.log(`${firstName.replace(/\b\w/g,(char) => char.toUpperCase())}\t"Title Case"`);
