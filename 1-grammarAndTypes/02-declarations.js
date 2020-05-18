/*
Variables
1-grammarAndTypes
    02-declarations.js
*/

//What is a variable?
var a = 1; //a is bucket, 1 is what is inside the bucket
var b = 2; //b is the bucket, 2 is what is inside the bucket
console.log(a + b);

//notes on naming variables
//1. a variable must begin with a letter, underscore, or dollar sign
//2. numbers may follow the above characters, but not come first (sample1)
//3. JavaScript is case sensitive ('hello' and 'Hello' are different variables)

/* Declarations, Initializations, Assignment
*/

/* Declarations refer to when we declare a variable (announcing the variable's presence and giving it a name)
Initializations refer to when a variable is assigned a value (var b = 2)
Assignment refers to giving a variable a value. This can be after the initalization. (Bucket does not permanantly store one liquid, can go from water to juice)
*/
var x
console.log('Declaration 1:', x); //undefined
x = 10
console.log('Initialization 1:', x)
x = 33
console.log('Assignment 1:', x);
var y;
console.log(y); //undefined
var y = 'hello'
console.log(y);
var y = 'you are my friend';
console.log(y);

/* Var, Let, and Const
Var - Old keyword for variables
Let - New keyword for variables (introduced ES6)
Const - New keyword for unchangeable variable
*/

let tonight = 'great!';
console.log(tonight);

const elevenFifty = 'amazing';
console.log(elevenFifty);

tonight = 'fantastic';
console.log(tonight + elevenFifty)
