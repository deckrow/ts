"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logStr) {
    return function (constructor) {
        console.log(logStr);
        console.log(constructor);
    };
}
// angular example decorator
// function WithTamplate(template: string, hookId: string) {
// 	return function (constructor: any) {
// 		const hookEl = document.getElementById(hookId);
// 		const p = new constructor();
// 		if (hookEl) {
// 			hookEl.innerHTML = template;
// 			hookEl.querySelector('h1')!.textContent = p.name;
// 		}
// 	}
// }
// executes bottom-up
var Personn = /** @class */ (function () {
    function Personn() {
        this.name = 'Den';
        console.log('creating person object... ');
    }
    Personn = __decorate([
        Logger('some str')
        // @WithTamplate('<h1>some text</h1>', 'app')
    ], Personn);
    return Personn;
}());
var p = new Personn();
// ----
function Log(target, propertyName) {
    console.log('Prop decorator');
    console.log(target, propertyName);
}
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error('invalid price - should be positive');
            }
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function (tax) {
        return this._price * (1 + tax);
    };
    __decorate([
        Log
    ], Product.prototype, "title", void 0);
    return Product;
}());
