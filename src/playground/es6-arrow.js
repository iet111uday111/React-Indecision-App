const square = function (x) {
  return x*x;  
};

// const squareArrow =  (x) => {
//     return x*x;  
// };

const squareArrow =  (x) => x*x;

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0]
// }

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(square(8));
console.log(squareArrow(9));
console.log(getFirstName('Udayaditya Singh'));

