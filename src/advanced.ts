type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
// interface ElevatedEmployee extends Admin, Employee {}

type Compbinable = string | number;

class Moto {
	drive() {
		console.log('driving...');
	}
}

class Car {
	drive() {
		console.log('driving...');
	}

	playMusic() {
		console.log('music playing...');
	}
}

type Vehicle = Car | Moto;

const v1 = new Moto();
const v2 = new Car();

function typeGuards(a: Admin | Employee, b: Compbinable, v: Vehicle) {
	if (typeof b === 'string') {
		console.log(b.toUpperCase());
	}
		
	if ('startDate' in a) {
		console.log(a.startDate);
	}

	if (v instanceof Car) {
		v.playMusic();
	}
};

// discriminated unions
interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';
	runningSpeed: number;
}

type Animal = Horse | Bird;

function moveAnimal(animal: Animal) {
	if (animal.type === 'bird') {
		console.log(animal.flyingSpeed);
	}
}

// type casting
// const input = <HTMLInputElement>document.getElementById('input')!;
const input = document.getElementById('input')! as HTMLInputElement;
input.value = '23';

// index props
interface ErrorContainer {
	id: string;

	[prop: string]: string;
};

// function overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}

	return a + b;
}

const result = add('some', 'name');
result.split(' ');
