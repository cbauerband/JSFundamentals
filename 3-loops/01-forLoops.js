//LOOPS

/* Loops offer a quick and easy way to do something repeatedly. 
Therde are many kinds of loops, but they all do roughly the same things.
    For Statement
    do while
    while
    labeled
    break
    continue
    for in
    for of
    .forEach
    .map
*/

/*loop structure: 
1) creation of an indexing variable 
2) a run condition 
3) a change to the indexing variable
*/

//count to 10 from 0 and log the numbers (for loop)
for (let i = 0; i <= 10; i++){
    console.log(i);
}
//loops can run indefinitely- just take out the i <= 10;

//counts to -25 by -3, starting from 2, logs the number
for (let i=2; i >=-25; i = i-3){
    console.log(i)
}

//display the numbers in a name individually
let name="Kaylee";
for (let i= 0; i < name.length; i++) {
    console.log(name[i]);
}

//for loops can use lots of variables
let start=2;
let stop= Math.floor(Math.random()*30);
let increment=3;
for (let i=start; i <= stop; i= i+increment){
    console.log(i);
}