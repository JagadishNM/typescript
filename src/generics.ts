function merge<T, U>(obj1: T, obj2: U) {
	return { ...obj1, ...obj2 };
}

const mergeObj = merge({ name: 'Mike' }, { age: 30 });
console.log(mergeObj, mergeObj.name);

// constraints
function merge2<T extends object, U extends object>(obj1: T, obj2: U) {
	return Object.assign(obj1, obj2);
}

const mergeObj2 = merge({ name: 'Mike' }, { age: 30 });
console.log(mergeObj2, mergeObj2.age);

// example
interface Lengthy {
	length: number;
}

function countAndDecribe<T extends Lengthy>(elements: T): [T, string] {
	let descriptionText: string;
	if (elements.length) {
		descriptionText = `Got ${elements.length} elemnts`;
		return [elements, descriptionText];
	} else {
		descriptionText = `Got 0 elemnts`;
		return [elements, descriptionText];
	}
}

const count = countAndDecribe('Hi there!');
console.log(count);

// keyof constraint
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
	return obj[key];
}

const s = getValue({ name: 'Mike', age: 30 }, 'name');
console.log(s);

// Generic Utility types

// Partial
interface Course {
	name: string;
	descrption: string;
	date: Date;
}

function courseDetails(course: Course): Course {
	let data: Partial<Course> = {};

	data.name = course.name;
	data.date = course.date;
	return data as Course;
}
console.log(
	courseDetails({
		name: 'Typescript',
		descrption: 'Typescript is superset of Javascript',
		date: new Date(),
	})
);

// Readonly
let names: Readonly<string[]> = ['Mike', 'Anna'];
// names.push('carrie');
// names.pop();
