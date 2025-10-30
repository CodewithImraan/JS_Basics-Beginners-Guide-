////////************* DATA TYPES */////////////////////////
// ===> A data types tells javascript what kind of value a variable holds like sting , num,ectss

// There are 2 categories
//  1. Premitive data
// Sting = Imraan ==> list of characters
// number = 2338 ==> numeric numer
// boolean = true/false ==> yex or no values
// undeined =>> declared but not assigned
// null ==> intentionally empty
// bigin = 12323872847376in ==> large number

//2. non-premitive data type
// Objects = {  name:imran, age:24} ==> key value pairs
// arrays = [ "html", "css" "js"] ==> set of strings
// functions = function fun (){}

// type of non-prmeitive data types  ==> all non-prmitive data types are like objects
//  object ==> Type of is OBJ
// Array ==> Type of is ONj
// Function ==> fucntion is also obh (Known as obj fucntion)

//****************************** Type conversion */
//  string to num
let score = "10000";
score = Number(score);
console.log(typeof score);

// num to string

let rank = 20;
rank = String(rank);
console.log(typeof rank);

// boolean to number

console.log(Number(true));
console.log(Number(false));

// num to boolean

console.log(Boolean(0));
console.log(Boolean(200));

//*********************** Mini challenges  ****************************************/

// 1. sum of two numbers from input strings ?

let salary1 = "24000";
let salary2 = "25000";
let total = Number(salary1) + Number(salary2);
console.log(total);

// 2. convert boolean to stirng

let idProvide = true;
let str = String(idProvide);
console.log(str, typeof str);

// 3. Output prdiction

// console.log("5" + 5);
//  ==>55 concatenation
console.log("5" - 3);
// ==> 2 , number sub: js converts string to number

// ************************************real world projects*********************************************

// 1. Convert user input

let inputAge = "23";
let age = Number(inputAge);
console.log(age);
//  output =====> 23

// 2. handle empty fields

let userName = "";

if (userName) {
  console.log("welcome Guys");
} else {
  console.log("pls enter your name");
}
// output ===> pls enter you name

// 3.Avoid type confusion

let enterAmount = "27948";
let balance = Number(enterAmount);
console.log(balance);

//*********** Simple challege  */
//Asks for a user’s name and age (as strings). Converts age into a number.

let UserName = "imran";
let myAge = "24";
realAge = Number(myAge);
console.log(`im ${UserName} and im ${realAge} years old:`, typeof realAge);
