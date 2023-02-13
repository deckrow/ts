"use strict";
// enum
var Role;
(function (Role) {
    // by default = 0, 1, 2, etc.
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["GUEST"] = 1] = "GUEST";
    Role[Role["DEVELOPER"] = 2] = "DEVELOPER";
})(Role || (Role = {}));
// object
var person = {
    name: 'Den',
    age: 26,
    isDev: true,
    abilities: ['muy-tay', 'actor', 'singer'],
    address: ['street', 23],
    role: Role.DEVELOPER,
};
// union with return types
function unionFn(val1, val2) {
    // some logic based on val2
    if (typeof val1 === 'string' && val2 === 'as-string') {
        val1.toUpperCase();
        // emtpy return returns undefined
        return;
    }
}
// functions
// ex: someUnionFn: Function -> any Function, but function
var someUnionFn;
someUnionFn = unionFn;
// unknown
// difference between unknown and any,
// that you need to check for a type before assignment
var userInput;
var userName;
userInput = 5;
userInput = 'Valera';
// won't work without if
if (typeof userInput === 'string') {
    userName = userInput;
}
// never
// by default it returns void
function neverFn(message, code) {
    // error returns never type
    throw { message: message, errorCode: code };
    // also infinite loop rerurns never type
    while (true) { }
}
