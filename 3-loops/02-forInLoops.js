/*
For In Loops
*/

//does not require that the thing you loop through be numbered

let student = {
name: "Peter",
awesome: true, 
degree: "javascript", 
week: 1}

for (item in student) {
    console.log(item);
    console.log(student[item]);
}

let catArray = ["maine coon", "burmese", "ragdoll", "siamese"];
//                  0             1          2          3 
for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

//let's write a for in loop that capitalizes the first letter of a name

let instructor = "pAul"; 
let capName;

for (n in instructor) {
    if (n==0) {
        capName = instructor[n].toUpperCase();
    } else 
    capName += instructor[n].toLowerCase();
}
console.log(capName);