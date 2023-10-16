"use strict";
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let favorite_places = ["Canada", "California", "India", "Paris", "France", "London"];
console.log(favorite_places);
let sortedplace = [...favorite_places].sort();
console.log("Alphabetical Order:", sortedplace);
console.log(favorite_places);
let reverseplace = [...favorite_places].reverse();
console.log("Reverse Order:", reverseplace);
console.log(favorite_places);
//reverse shows in orginal order
favorite_places.reverse();
console.log(favorite_places);
// again reverse to show original order
favorite_places.reverse();
console.log(favorite_places);
//sorted in alphabetical order
favorite_places.sort();
console.log(favorite_places);
//reverse, sorted array 
favorite_places.reverse();
console.log(favorite_places);
