//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

let  fruit = "APRICOT";
//test1
console.log("Is fruit == 'apricot'? I predict True.");
console.log(fruit == 'apricot');
//test2
console.log("Is fruit == 'Banana' ? I predict False.");
console.log(fruit =='banana');
//test3
console.log("Is fruit != 'banana' ? I predict True. ?");
console.log(fruit != 'banana');

// Tests using the lower case function
//test4
console.log("fruit.toLowerCase() == 'apricot' ? I predict True.");
console.log( fruit.toLowerCase() == 'apricot')
//test5
console.log('Is fruit.toLowerCase()== "apple" ? I predict False.')
console.log(fruit.toLowerCase() == 'banana');



// Tests using "and" and "or" operators
 let num = 5;
//AND logical operator 
//test6
 console.log("Is num > 4 && num < 6 ? I predict True.")      //both conditions are true
 console.log(num > 4 && num < 6 );
//test7
console.log('Is num > 6 && num < 4 ? I predict False.');     //both conditions are false
console.log(num > 6 && num < 4);
//test8
console.log('Is num > 7 && num < 6 ? I predict False.');     // first condition is false
console.log(num > 7 && num < 6 )                             // second condition is true
//test9
console.log('Is num > 4 && num < 3 ? I predict False.');     // first condition is true
console.log(num > 4 && num < 3);                             // second condition is false

//OR 
//test10
console.log('Is num > 4 || num < 6 ? I predict True.');     // both conditions are true
console.log(num > 4 || num < 6);
//test11
console.log('Is num > 6 || num < 4 ? I predict False.');     // both conditions are false
console.log(num > 6 || num < 4);
//test12
console.log('Is num > 7 || num < 6 ? I predict True.');   //first condition is false
console.log(num > 7 || num < 6);                          //second condition is true
//test13
console.log('Is num > 4 || num < 7 ? I predict True.');    //first condition is true
console.log(num > 4 || num < 7);                           //second condition is false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//test14
console.log("Is num > 6 ? I predict False.");
console.log(num > 6 );
//test15
console.log("Is num < 6 ? I predict True.");
console.log(num < 6 );
//test16
console.log("Is num >= 6 ? I predict False.");
console.log(num >= 6 );
//test17
console.log("Is num <= 6 ? I predict True.");
console.log(num <= 6 );

//• Test whether an item is in a array

let veggies = ["potato", "spinach", "carrot", "onion" ];
//test18
console.log (" Is cucumber  in the veggies array ? I predict False.");
console.log( veggies.includes("cucumber"));
//test19
console.log (" Is onion in the veggies array ? I predict True.");
console.log( veggies.includes("onion"));