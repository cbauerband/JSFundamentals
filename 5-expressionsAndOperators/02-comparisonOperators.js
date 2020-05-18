//COMPARISON OPERATORS

//equality comparison operator
console.log('3' == 3);
console.log(2 == 2);
console.log(2 == '3');

//strict equality comparison operator
console.log(3 === 3);
console.log('3' === 3);

//not equal comparison log
console.log('3' != 4);
console.log('3' != 3);

//strict not equal comparison log
console.log('3' !== 3);
console.log(3 !== 3);

//greater than comparison
console.log(3 > 2);
console.log(2 > 3);

//less than comparison log
console.log(1 < 3);
console.log(2 < 1);

//greater than or equal to
console.log(3 >= 2);
console.log(3 >= 3);
console.log(2 >= 3);

//less than or equal to
console.log(2 <= 3);
console.log(2 <= 2);
console.log(3 <= 2);

//and (both expressions on either side of the operator must be true for 'and' to return true)
console.log(1 < 2 && 3 > 0);
console.log(2<1 && 3>0);

//or (either expression on one side of the operator must be true for 'or' to return true)
console.log(1<2 || 3<0);
console.log(2<1 || 3<0);

let obj = {key: 'test'}
console.log(obj == {key:'test'});
console.log(obj == obj);

