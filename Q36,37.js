"use strict";
//36. T-Shirt: Write a function called make_shirt() that accepts a size and the
//text of a message that should be printed on the shirt. The function should print
//a sentence summarizing the size of the shirt and the message printed on it.
//Call the function.
function make_shirt(size, message) {
    console.log(`you have ordered a ${size} sized shirt with the message ${message}. `);
}
console.log(make_shirt("large", "I will do it."));
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirts(size, message = "I love typescript.") {
    console.log(`Shirt sized is ${size} with the message ${message}.`);
}
console.log(make_shirts("large"));
console.log(make_shirts("medium"));
console.log(make_shirts("small", "I can do everything."));
