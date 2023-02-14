"use strict";
var Moto = /** @class */ (function () {
    function Moto() {
    }
    Moto.prototype.drive = function () {
        console.log('driving...');
    };
    return Moto;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('driving...');
    };
    Car.prototype.playMusic = function () {
        console.log('music playing...');
    };
    return Car;
}());
var v1 = new Moto();
var v2 = new Car();
function typeGuards(a, b, v) {
    if (typeof b === 'string') {
        console.log(b.toUpperCase());
    }
    if ('startDate' in a) {
        console.log(a.startDate);
    }
    if (v instanceof Car) {
        v.playMusic();
    }
}
;
function moveAnimal(animal) {
    if (animal.type === 'bird') {
        console.log(animal.flyingSpeed);
    }
}
// type casting
// const input = <HTMLInputElement>document.getElementById('input')!;
var input = document.getElementById('input');
input.value = '23';
;
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add('some', 'name');
result.split(' ');
