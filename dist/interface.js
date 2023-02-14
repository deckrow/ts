"use strict";
// type AddFn = (a: number, b: number) => number;
var user;
user = {
    name: 'Den',
    greet: function () {
        console.log(this.name);
    },
};
var Developer = /** @class */ (function () {
    function Developer(name, age) {
        this.name = name;
        this.age = age;
    }
    Developer.prototype.greet = function () {
        console.log(this.name + ' ' + this.age);
    };
    return Developer;
}());
