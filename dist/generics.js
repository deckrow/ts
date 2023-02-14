"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var a = merge({ name: 'Max' }, { age: 26 });
function countAndDescribe(el) {
    if (el.length > 0) {
        return [el, "el got " + el.length + " elements"];
    }
    return [el, 'got no value'];
}
console.log(countAndDescribe([1, 2, 3]));
