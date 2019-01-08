/**
 * arguments object - no longer bound with arrow functions
 * @param  a 
 * @param  b 
 */
const add = (a, b) => {
    
    // console.log(arguments);
    
    return a + b;
}

console.log(add(55,56));

/**
 * this keyword - no longer bound with arrow functions
 */

const user = {
    name: 'Udayaditya Singh',
    cities: ['Pune', 'Indore', 'Banglore'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers:[10,20,30],
    multiplyBy:3,
    multiply(){
        return this.numbers.map((number) => number*this.multiplyBy);
    }
}

console.log(multiplier.multiply());
