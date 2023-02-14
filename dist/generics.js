"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var a = merge({ name: 'Max' }, { age: 26 });
console.log(a.name);
function countAndDescribe(el) {
    if (el.length > 0) {
        return [el, "el got " + el.length + " elements"];
    }
    return [el, 'got no value'];
}
console.log(countAndDescribe([1, 2, 3]));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: 'Den' }, 'name');
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('Den');
var numberStorage = new DataStorage();
numberStorage.addItem(23);
function createCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
var names = ['Den'];
// names.push(); - won't work
