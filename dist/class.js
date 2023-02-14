"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        // needed to make it inaccessible from outside but will work with inheritance
        // private won't work
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    // shorthand for version above
    // constructor(public name: string, private readonly id: ) {}
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        _this.lastAddedEmployee = admins[0];
        return _this;
    }
    Object.defineProperty(ITDepartment.prototype, "lastEmployee", {
        get: function () {
            if (this.lastAddedEmployee) {
                return this.lastAddedEmployee;
            }
            throw new Error('No employee found');
        },
        set: function (employee) {
            if (!employee) {
                throw new Error('Please provide an employee');
            }
            this.lastAddedEmployee = employee;
        },
        enumerable: false,
        configurable: true
    });
    ITDepartment.prototype.addEmployee = function (employee) {
        if (employee !== 'Den') {
            this.employees.push(employee);
        }
    };
    ITDepartment.getInstance = function () {
        if (ITDepartment.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment('d2', []);
        return this.instance;
    };
    ITDepartment.prototype.someMethod = function () {
        console.log('some required method');
    };
    ITDepartment.creationDate = '2022';
    return ITDepartment;
}(Department));
// singleton instance
var it = ITDepartment.getInstance();
// const it = new ITDepartment('d1', ['Den']);
it.describe();
it.addEmployee('Max');
it.lastEmployee = 'Nika';
console.log(ITDepartment.creationDate);
console.log(it.lastEmployee);
// const accountingCopy = { name: 'dummy', describe: accouting.describe };
// accountingCopy.describe();
