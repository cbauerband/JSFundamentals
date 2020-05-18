/* Types

*/
//Booleans
var on = true;
console.log(on);

let off = false;
console.log(off);
//booleans can represent true/false, yes/no, on/off, 0/1

//undefined
//a variable has been declared but has not been defined a value (variable has been forgotten about)

let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

//null means a variable has been declared and assigned a value of null (variable has not been forgotten about)
var empty = null;
console.log(empty);
/* null and undefined both represent variables with no value inside. Think of it this way, null values are for 
gag gifts with nothing inside, cause that's the joke. Undefined is when a person gives a gift and has forgotten to put the gift inside. Oops.
*/

let myActualAge = 90;
console.log(myActualAge);

let precise = 99999999999999;
console.log(precise);

let rounded = 999999999999999999
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//Strings
//a string is any value within quotes; JavaScript spits out value within quotes

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//string concatenation vs addition
let first = 1050 + 100;
let second = "1050" + "100";
let third = 1050 + '100';
console.log(first);
console.log(second);
console.log(third);
console.log(typeof third);

//interpolation
//lets you use strings with dynamic content (they require backticks)
//example1:
let age =32;
let string = `my age is: ${age}`;
console.log(string);

//Objects
/*an object is a container that store property names and their values (it can hold mutliple data types)
Objects are denoted by {curly braces} and have keys and values. color (key): blue (value) (separated by :)
Each key-value pair is separated by a comma
*/
let hulk = {
    color: 'green',
    age: 42,
    isStrong: true
}
console.log(hulk);
console.log(hulk.age);
console.log(hulk.color);
console.log(typeof hulk);

//Arrays
/* Arrays store multiple values in an ordered way
They too hold multiple data types. Arrays are denoted by [square brackets]
has values ('blue', 'red', 'yellow', 'green') separated by commas.
*/
var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'scrub teeth', 'rinse brush', 'rinse mouth'];
console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[4]);
console.log(typeof stepsToBrushTeeth);
