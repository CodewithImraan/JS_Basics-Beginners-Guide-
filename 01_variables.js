////// What is variable ==> variable is like a container that holds data and we resued or updated later in the programm

// we can declare variabels using var, let , const

// var sum = 30
// let num = 40
// const roll = 300
// console.log(sum+num+ roll); // ans = 370

// const id = "29220"
// let Fullname = "imran"
// var email = "shaikimran954277@gmail"
// console.table([id, Fullname, email]); // ans = It gives index, values in table format

// we can store any data in variables

let name = "imraan"; // string
let age = 24; // number
let isCoder = true; // boolean
let skills = ["html", "css", "js", "react"]; // array
let info = {
  city: "Tiruapati",
  level: "Full-stack",
}; // Obj

console.log(name, age, isCoder, skills, info);

//*************** */ Examples to umderstand how variables in works in Real projects********************

// Question: create payout card totoal with discout of 1000rs  == 2 ebooks costs 3000rs

let firstEbook = 1000;
let secondEbook = 2000;
let discout = 1000;
let gst = 20;
let grandTotal = firstEbook + secondEbook - discout - gst;
console.log("Total Price:", grandTotal); // ans ==> 1980rs

// 1.Declares a constant for your country name. 2.Declares a variable for population. 3.Increases population by 1 million.

const country = "India";
let population = 1410;
population += 1;

console.log(`${country}'s population is now ${population} miilion.`); //  Ans ==> India's population is now 1411 miilion.
