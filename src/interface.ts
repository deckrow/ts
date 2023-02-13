// type AddFn = (a: number, b: number) => number;

interface AddFn {
	(a: number, b: number): number;
}

interface Named {
	// readonly also automaticaly added to class
	readonly name: string;
}

interface Aged {
	age: number;
}

interface User extends Named {
	greet?(): void;
}

let user: User;

user = {
	name: 'Den',

	greet() {
		console.log(this.name);
	},
};

class Developer implements User, Aged {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	greet() {
		console.log(this.name + ' ' + this.age);
	}
}
