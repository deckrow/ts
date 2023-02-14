function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const a = merge({ name: 'Max' }, { age: 26 });
console.log(a.name);

interface Lenthy {
	length: number;
}

function countAndDescribe<T extends Lenthy>(el: T): [T, string] {
	if (el.length > 0) {
		return [el, `el got ${el.length} elements`];
	}

	return [el, 'got no value'];
}

console.log(countAndDescribe([1, 2, 3]));

function extractAndConvert<T extends object, U extends keyof T>(
	obj: T,
	key: U
) {
	return obj[key];
}

extractAndConvert({ name: 'Den' }, 'name');

class DataStorage<T extends string | number> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Den');

const numberStorage = new DataStorage<number>();
numberStorage.addItem(23);

interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}

function createCourseGoal(
	title: string,
	description: string,
	date: Date
): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {};

	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;

	return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Den'];
// names.push(); - won't work
