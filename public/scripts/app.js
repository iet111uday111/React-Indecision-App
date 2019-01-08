'use strict';

/**
 * arguments object - no longer bound with arrow functions
 * @param  a 
 * @param  b 
 */
var add = function add(a, b) {

    // console.log(arguments);

    return a + b;
};

console.log(add(55, 56));

/**
 * this keyword - no longer bound with arrow functions
 */

var user = {
    name: 'Udayaditya Singh',
    cities: ['Pune', 'Indore', 'Banglore'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
