"use strict";
//34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
//pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza
//instead of printing just the name of the pizza. For each pizza you should
//have one line of output containing a simple statement like I like pepperoni
//pizza.
//• Add a line at the end of your program, outside the for loop, that states
//how much you like pizza. The output should consist of three or more lines
//about the kinds of pizza you like and then an additional sentence, such as
//I really love pizza!
let favorite_pizza = ["Pepperoni pizza", "Fajita pizza", "Tikka pizza"];
for (let pizza_name of favorite_pizza) {
    if (pizza_name === favorite_pizza[0]) {
        console.log(`${favorite_pizza[0]}`);
    }
    else if (pizza_name === favorite_pizza[1]) {
        console.log(`${favorite_pizza[1]}`);
    }
    else {
        console.log(`${favorite_pizza[2]}`);
    }
}
for (let pizza_name of favorite_pizza) {
    if (pizza_name === favorite_pizza[0]) {
        console.log(`I like ${favorite_pizza[0]}`);
    }
    else if (pizza_name === favorite_pizza[1]) {
        console.log(`I like ${favorite_pizza[1]}`);
    }
    else {
        console.log(`I like ${favorite_pizza[2]}`);
    }
}
console.log("I like pizza because i love its soft dough, melted cheese, fresh veggies and meat... ohh in simple n\
 words i LOve pizza and i can eat it throughout the day and i can eat it anywhere anytime in any situation.. n\
 i am a pizza person who loves pizza more than anything. I Really Love Pizza. laugh!");
