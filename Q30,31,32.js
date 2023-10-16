"use strict";
//30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
//after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ["lisa", "nick", "alex", "admin", "john"];
for (let name of usernames) {
    if (name === "admin") {
        console.log("Helo Admin, would you like to see a status report.");
    }
    else {
        console.log(`Hello ${name}, thank you for logging in again.`);
    }
    ;
}
//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
if (usernames.length === 0) {
    console.log("There is no users so we need to find some users.");
}
for (let name of usernames) {
    if (name === "admin") {
        console.log("Helo Admin, would you like to see a status report.");
    }
    else {
        console.log(`Hello ${name}, thank you for logging in again.`);
    }
    ;
}
usernames.shift();
console.log(usernames.length);
console.log(usernames);
usernames.splice(0, 4);
console.log(usernames.length);
console.log(usernames);
if (usernames.length === 0) {
    console.log("There is no users so we need to find some users.");
}
for (let name of usernames) {
    if (name === "admin") {
        console.log("Helo Admin, would you like to see a status report.");
    }
    else {
        console.log(`Hello ${name}, thank you for logging in again.`);
    }
    ;
}
//32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
//new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["ushba", "sidra", "hifza", "azan", "azlan"];
let new_users = ["hifza", "azan", "haroon", "haris", "ayzel"];
function usernametaken(username) {
    return current_users.some((current_users => current_users.toLowerCase() === username.toLowerCase()));
}
for (let username of new_users) {
    if (usernametaken(username)) {
        console.log(`username ${username} is not available, please need to enter a new username.`);
    }
    else {
        console.log(`username ${username} is available.`);
    }
}
;
