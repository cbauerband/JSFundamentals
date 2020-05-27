/* SCOPE
*/

//What is Scope?
//JavaScript has both Local and Global scope

//Example1
var x = 12;
function scope(){
x = 33;
console.log(x);//33
}
scope();
console.log(x);//12

//Example2
var x = 12
function scope() {
x = 33 //variable reassignment
console.log(x);
}
scope();
console.log(x);

//Example3
var x = 1;
function scope() {
    var x = 2;
    function scopeInner() {
        var x = 3;
        console.log(x);//3
    }
    scopeInner();
    console.log(x);//2
}
scope();
console.log(x);//1

//Example4 (Contrasts with 5)

var x = 12;
function scope() {
    var x = 33;
    if (true) {
        let x =45;
        console.log(x);//45
    }
    console.log(x);//33
}
scope();
console.log(x);//12

//Example5
var x = 12;
function scope() {
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x);// 45
    }
    console.log(x); // 45 <-- var doesn't obey "block" scope

}
scope();
console.log(x); //12

let myVar = 1;
function b(){
    console.log("function b", myVar);
}

function a(){
    console.log("function a");
    let myVar = 2;
    b(); //is on global scope, so is 1
}
a();

function a() {
    console.log("Function a");

    function b(){
        console.log("Function b", myVar);
    }
    let myVar=2
    b(); //has to go here because of local scope
}
a();
b();//doesn't work here because it isn't a global scope, it's local to the above function