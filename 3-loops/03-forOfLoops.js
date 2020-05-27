/* 
For Of Loops 
*/

/*of requires that your thing that you're looping through needs to be
iterable--that means it needs to be numbered
*/

//Example 1: Does not work because items are not numbered

/*let student = {
    name: "Carissa",
    isAwesome: true,
    degree: "Javascript",
    week: 1
}
for (item of student) {
    console.log(item);
} */


//Example 2: Does work with arrays because they need an order
let catArray = ["maine coon", "burmese", "ragdoll", "siamese"];
for (cat of catArray) {
    console.log(cat, "says meow");
    console.log(catArray[cat]);
}