var nameVar = 'Uday';
var nameVar = 'Mike';
console.log('nameVar',nameVar);

let namelet = 'Jen';
namelet = 'Julie';
console.log('namelet',namelet);

const nameConst = 'Frank';
console.log('nameConst',nameConst);

function getPetName(){
    const petName = 'Hal';
    return petName;
}

const petName =  getPetName();
console.log(petName);


//Block Level Scope

const fullName = 'Udayaditya Singh';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);





