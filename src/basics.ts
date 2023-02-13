// enum
enum Role {
	// by default = 0, 1, 2, etc.
	ADMIN,
	GUEST,
	DEVELOPER,
}

// type
type Person = {
	name: string;
	age: number;
	isDev: boolean;

	// array
	abilities: string[];

	// tuple
	address: [string, number];

	// enum
	role: Role;
};

// object
const person: Person = {
	name: 'Den',
	age: 26,
	isDev: true,

	abilities: ['muy-tay', 'actor', 'singer'],
	address: ['street', 23],

	role: Role.DEVELOPER,
};

// union with return types
function unionFn(
	val1: number | string,
	val2: 'as-string' | 'as-text'
): undefined | void {
	// some logic based on val2
	if (typeof val1 === 'string' && val2 === 'as-string') {
		val1.toUpperCase();

		// emtpy return returns undefined
		return;
	}
}

// functions
// ex: someUnionFn: Function -> any Function, but function
let someUnionFn: (
	a: number | string,
	b: 'as-string' | 'as-text'
) => undefined | void;

someUnionFn = unionFn;

// unknown
// difference between unknown and any,
// that you need to check for a type before assignment
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Valera';

// won't work without if
if (typeof userInput === 'string') {
	userName = userInput;
}

// never
// by default it returns void
function neverFn(message: string, code: number): never {
	// error returns never type
	throw { message, errorCode: code };

	// also infinite loop rerurns never type
	while (true) {}
}
