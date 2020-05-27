//example1
console.log(fork);
var fork = "blue";

//example1 breakdown
var fork;
console.log(fork); //undefined
fork = "blue"; //blue

//example2 
function hoistTest() {
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}
hoistTest();

//example2 breakdown
function hoistTest() {
    var testVar;
    console.log(testVar);//undefined
    testVar = 10;
    console.log(testVar);//10
}
hoistTest();