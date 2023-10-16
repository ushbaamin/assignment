"use strict";
let student = "alexandar bro";
console.log(student.toUpperCase());
console.log(student.toLowerCase());
let newName = student.split(" ").map((l) => l[0].toUpperCase() + l.substr(1)).join(" ");
console.log(newName);
