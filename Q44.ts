/*44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.*/

function Sandwiches(...items:string[]){
    let summary: string = " you hve ordered sandwich with "

    for (let i = 0; i <items.length ; i++ ){
        summary += items[i];
 
    if ( i !== items.length - 1){
        summary += " , ";
    }
} 
console.log(summary);
};
Sandwiches("turkey", "avocado", "bacon", "lettuce", "tomato");
Sandwiches("roast beef", "ham", "cheese", "sauerkraut");
Sandwiches ("tuna", "cucumber", "pickle", "bread crumbs");
