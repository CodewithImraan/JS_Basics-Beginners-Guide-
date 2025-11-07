//******* We can put conditions to make certain decision */

//  Problem: make a statement that if youre age is greater than 18 you can vote ottherwise you're not

let age = 33; // 0utput => You can vote

if (age >= 18) {
  console.log("you can Vote");
} else {
  console.log("You're not eligible");
}

// #2 problem: playing cricket

cricketMembers = 13;

if (cricketMembers < 11) {
  console.log("Team is not enough to lay");
} else if (cricketMembers == 11) {
  console.log("perfect to play");
} else if (cricketMembers >= 12) {
  console.log("you can play with Substitute Players");
}



// Switch case************  ==> payment method selection ******************************

let userPaysVia = "UI";

switch (userPaysVia) {
  case "debitCard":
    console.log("You're selecting Debit Card Payment method");
    break;
  case "creditCard":
    console.log("You're selecting Credit card Method");
    break;
  case "UPI":
    console.log("You're selecting UPI card Method");
    break;
  case "COD":
    console.log("You're selecting COD card Method");
    break;
  default:
    console.log("Please select correct Method to pay");
}

// Switch case ******* ==> Socail media notification type ******************************

let notification = "";

switch (notification) {
  case "like":
    console.log("someone liked you");
    break;
  case "comment":
    console.log("someone comments on you");
    break;
  case "reply":
    console.log("someone Replyed you");
    break;
  default:
    break;
}

