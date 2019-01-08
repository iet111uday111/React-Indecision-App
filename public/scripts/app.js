'use strict';

var square = function square(x) {
  return x * x;
};

// const squareArrow =  (x) => {
//     return x*x;  
// };

var squareArrow = function squareArrow(x) {
  return x * x;
};

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0]
// }

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(square(8));
console.log(squareArrow(9));
console.log(getFirstName('Udayaditya Singh'));
