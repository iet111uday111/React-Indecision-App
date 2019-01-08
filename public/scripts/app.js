'use strict';

var nameVar = 'Uday';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

var namelet = 'Jen';
namelet = 'Julie';
console.log('namelet', namelet);

var nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Hal';
  return petName;
}

var petName = getPetName();
console.log(petName);

//Block Level Scope

var fullName = 'Udayaditya Singh';
var firstName = void 0;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
