//Literals

let weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday"]
console.log(weekDays.toString());
console.log(weekDays[3]);

let soup = {
    a: "chicken noodle",
    b: "Broccoli and Cheese",
    c: "tomato",
    d: "chili"
}
console.log(soup.c);

//Array and Object Literals
//can hold primitive (string, boolean, etc) and complex types (objects, arrays, and functions)

let complexArrLiteral = [1, true, 'Academy', [1, 2, 3], {key: 'test'}, function() {return 'yes'}];
console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[2]);

let complexObjLiteral = {num: 1, boolean: true, string: 'Academy', arr: [1, 2, 3], object: {key: 'test'}, func: function() {return 'yes'}
}
console.log(complexObjLiteral.func);
console.log(complexObjLiteral.arr);