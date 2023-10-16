//14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.

//You are cordially invited to attend the dinner party we have planned for [Date

let guest_List=["Uncle", "Anuty", "Sister", "Brother"];
console.log(` Hello ${guest_List[0]},You are cordially invited to attend the dinner party we have planned for 12-12-2023.`);
console.log(` Hello ${guest_List[1]},You are cordially invited to attend the dinner party we have planned for 12-12-2023.`);
console.log(` Hello ${guest_List[2]},You are cordially invited to attend the dinner party we have planned for 12-12-2023.`);
console.log(` Hello ${guest_List[3]},You are cordially invited to attend the dinner party we have planned for 12-12-2023.`);

//15. Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.

console.log(`${guest_List[0]}, can't make the dinner.`);
//removing last guest name
guest_List.pop();
//adding new guest  in the last 
let add_new_guest=guest_List.push("Sakina");
console.log(add_new_guest);
console.log(guest_List);

console.log(`${guest_List[0]}, you are invitated for dinner party.`);
console.log(`${guest_List[1]}, you are invitated for dinner party.`);
console.log(`${guest_List[2]}, you are invitated for dinner party.`);
console.log(`${guest_List[3]}, you are invitated for dinner party.`);


// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

console.log("Hey!, I found a bigger table for the dinner party so i decided to add more guests. ");
//adding at the start of the list
guest_List.unshift("Sam");

//adding to   the middle of array
guest_List.splice(2,0, "zainab");
console.log(guest_List);

//append is not use in ts or js, so adding value at the end of the list we will use push.
guest_List.push("Ushba");
console.log(guest_List);


console.log(`${guest_List[0]}, you are invitated for dinner party.`);
console.log(`${guest_List[1]}, you are invitated for dinner party.`);
console.log(`${guest_List[2]}, you are invitated for dinner party.`);
console.log(`${guest_List[3]}, you are invitated for dinner party.`);
console.log(`${guest_List[4]}, you are invitated for dinner party.`);
console.log(`${guest_List[5]}, you are invitated for dinner party.`);
console.log(`${guest_List[6]}, you are invitated for dinner party.`);




// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.


console.log("Bad news, i have space only for two guests on dinner table. ");

//poping out for the list
console.log(` ${guest_List[6]} sorry, i can’t invite you to dinner.`);
guest_List.pop();
console.log(guest_List);

console.log(` ${guest_List[5]} sorry, i can’t invite you to dinner.`);
guest_List.pop();
console.log(guest_List);

console.log(` ${guest_List[4]} sorry, i can’t invite you to dinner.`);
guest_List.pop();
console.log(guest_List);

console.log(` ${guest_List[3]} sorry, i can’t invite you to dinner.`);
guest_List.pop();
console.log(guest_List);

console.log(` ${guest_List[2]} sorry, i can’t invite you to dinner.`);
guest_List.pop();
console.log(guest_List);

//still invited
console.log(` ${guest_List[1]} ,you are still invited for the dinner .`);
console.log(` ${guest_List[0]} ,you are still invited for the dinner.`);


//removing the last two names 
guest_List.splice(0,2);
console.log(guest_List);








































// //removing guest
// const remove_guest= guest_List.pop();
// console.log(remove_guest);
// const remove_guest2 = guest_List.shift();
// console.log(remove_guest2);
// console.log(guest_List)
// guest_List.splice(0,2);
// console.log(guest_List);

// //adding guest
// const add_new_guest=guest_List.push("Nusrat");
// console.log(add_new_guest);
// console.log(guest_List);

// const add_new_guest2=guest_List.unshift("fazilat");
// console.log(add_new_guest2);
// console.log(guest_List);

// guest_List.splice(2,0 , "Adiya", "Ruqaiya");
// console.log(guest_List);