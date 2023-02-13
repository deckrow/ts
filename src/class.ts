abstract class Department {
	// public by default
	name: string;

	// private to avoid -> accounting.id = 'd2';
	private readonly id: string;

	// needed to make it inaccessible from outside but will work with inheritance
	// private won't work
	protected employees: string[] = [];

	constructor(id: string, name: string) { 
		this.id = id;
		this.name = name;
	}

	// shorthand for version above
	// constructor(public name: string, private readonly id: ) {}

	describe(this: Department) {
		console.log('Department: ' + this.name);
	}

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	abstract someMethod(): void;
}

class ITDepartment extends Department {
	static creationDate: string = '2022';
	private static instance: ITDepartment;

	private lastAddedEmployee: string;

	constructor(id: string, public admins: string[]) {
		super(id, 'IT');

		this.lastAddedEmployee = admins[0];
	}

	get lastEmployee() {
		if (this.lastAddedEmployee) {
			return this.lastAddedEmployee;
		}

		throw new Error('No employee found');
	}

	set lastEmployee(employee: string) {
		if (!employee) {
			throw new Error('Please provide an employee');
		}

		this.lastAddedEmployee = employee;
	}

	addEmployee(employee: string) {
		if (employee !== 'Den') {
			this.employees.push(employee);
		}
	}

	static getInstance() {
		if (ITDepartment.instance) {
			return this.instance;
		}

		this.instance = new ITDepartment('d2', []);
		return this.instance;
	}

	someMethod() {
		console.log('some required method');
	}
}

// singleton instance
const it = ITDepartment.getInstance();

// const it = new ITDepartment('d1', ['Den']);
it.describe();
it.addEmployee('Max');
it.lastEmployee = 'Nika';

console.log(ITDepartment.creationDate);
console.log(it.lastEmployee);

// const accountingCopy = { name: 'dummy', describe: accouting.describe };
// accountingCopy.describe();