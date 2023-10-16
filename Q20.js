"use strict";
//20. Think of something you could store in a array.For example,
// you could make a list of mountains, rivers, countries, cities, languages, or anything
//else you’d like. Write a program that creates a list containing these items.
let rivers = ["Chanab", "Ravi", "Satluj", "Jhelum"];
for (let x = 0; x <= 5; x++) {
    if (rivers[x] === "satluj") {
        console.log("It's true, satlug is the river of pakistan.");
        break;
    }
    else if (rivers[x] === "Ravi") {
        console.log("yeah , it is one the river which is situated in punjab.");
        break;
    }
    else if (rivers[x] === "jehlum") {
        console.log("Jehulum River is part of pakistan.");
        break;
    }
    else {
        console.log("Forth one is chanab");
    }
    ;
}
// }
//{
//     if  ("Ravi" === rivers[x]) {
//         console.log("One of the river is Ravi");
//     break;
// } else {
//     console.log("There is no river.");
// };
// }
// let countries = ["Malaysia", "Switzerland", "Canada", "Russia"];
// if 
