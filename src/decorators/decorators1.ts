function Welcome() {
	return function <T extends { new (...args: any[]): { name: string } }>(
		originalConstructor: T
	) {
		return class extends originalConstructor {
			constructor(..._: any[]) {
				super();
				this.name = 'Max well';
			}
		};
	};
}

@Welcome()
class Employee1 {
	name: string = 'Max';

	constructor() {
		console.log('Employee object');
	}
}

let emp = new Employee1();
console.log(emp.name);
