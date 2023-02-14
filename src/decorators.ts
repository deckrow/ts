function Logger(logStr: string) {
	return function (constructor: Function) {
		console.log(logStr);
		console.log(constructor);
	};
}

// angular example decorator
function WithTamplate(template: string, hookId: string) {
	console.log('template factory');

	return function <T extends { new (...args: any[]): { name: string } }>(
		originalConstructor: T
	) {
		// returns new constructor function and overwrites real class
		return class extends originalConstructor {
			constructor(..._: any[]) {
				super();

				console.log('rendering template');

				const hookEl = document.getElementById(hookId);
				if (hookEl) {
					hookEl.innerHTML = template;
					hookEl.querySelector('h1')!.textContent = p.name;
				}
			}
		};
	};
}

// executes bottom-up
@Logger('some str')
// @WithTamplate('<h1>some text</h1>', 'app')
class Personn {
	name = 'Den';

	constructor() {
		console.log('creating person object... ');
	}
}

const p = new Personn();

// ----

function Log(target: any, propertyName: string | Symbol) {
	console.log('Prop decorator');
	console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log('accessor decorator');
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

function Log3(
	target: any,
	name: string | Symbol,
	descriptor: PropertyDescriptor
) {
	console.log('method decorator');
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
	console.log('parameter decorator');
	console.log(target);
	console.log(name);
	console.log(position);
}

// decorators executes when class instantiated
// not when you call a method
class Product {
	@Log
	title: string;
	private _price: number;

	@Log2
	set price(val: number) {
		if (val > 0) {
			this._price = val;
		} else {
			throw new Error('invalid price - should be positive');
		}
	}

	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;
	}

	@Log3
	getPriceWithTax(@Log4 tax: number) {
		return this._price * (1 + tax);
	}
}

const p1 = new Product('book', 19);

const u: Partial<{ name: string }> = {};

// 1
u.name = 'den';

// 2 same thing but with descriptor
Object.defineProperty(u, 'name', {
	value: 'den',
	configurable: true,
	writable: true,
	enumerable: true,
});

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		},
	};

	return adjDescriptor;
}

class Printer {
	message = 'This works!';

	@Autobind
	showMessage() {
		console.log(this.message);
	}
}

const printer = new Printer();
const btn = document.querySelector('button')!;
btn.addEventListener('click', printer.showMessage);
