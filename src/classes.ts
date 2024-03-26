class Department {
	//name!: string;
	//private readonly id!: string;
	private employee: string[] = [];

	// static property/field
	static fiscalYear = '2020';

	constructor(
		private readonly id: string,
		public name: string //n: string
	) {
		//this.name = n;

		// static property/field cannot acess with this keyword as static mehods/properties cannot be created instances

		// can access direcltly with class name
		console.log(Department.fiscalYear);
	}

	// static method
	static createEmployee(name: string) {
		console.log(this.fiscalYear);
		return { name };
	}

	describe(this: Department) {
		console.log(this.name);
		console.log(this.id);
	}

	addEmployee(emp: string) {
		this.employee.push(emp);
	}

	get employeesList(): string[] {
		return this.employee;
	}
}

// inheritence
class ITDepartment extends Department {
	admins!: string[];
	constructor(id: string, admins: string[]) {
		super(id, 'R&D');
		this.admins = admins;
	}
}

const department = new Department('74106', 'Accounting');
department.describe();
department.addEmployee('Kate');
department.addEmployee('Joe');
console.log(department.employeesList);

// inheritence
const it = new ITDepartment('456', ['Max']);
console.log(it);

// static methods/properties
console.log(Department.createEmployee('Elon'));

// In JavaScript, the this keyword refers to an object.
//Which object depends on how this is being invoked (used or called).
const dep = {
	name: 'Software',
	describe: department.describe,
	addEmployee: department.addEmployee,
};
// console.log(dep.describe());
