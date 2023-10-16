"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
function show_magicians(names) {
    for (let magician of names)
        console.log(magician);
}
;
let magician_name = ["David", "Dynamo", "Teller", "Ricky Jay"];
console.log(show_magicians(magician_name));
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
function make_great(name) {
    for (let i = 0; i < name.length; i++)
        console.log("The great", name[i]);
}
;
magician_name = ["Harry Houdini", "David Copperfield", "Penn and Teller", "David Blaine"];
console.log(make_great(magician_name));
/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/
console.log(make_great(magician_name));
console.log(show_magicians(magician_name));
