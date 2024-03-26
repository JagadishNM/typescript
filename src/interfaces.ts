interface Named {
	name: string;
}
interface Greeting extends Named {
	greet: (msg: string) => void;
}

class Person implements Greeting {
	name: string;

	constructor(n: string) {
		this.name = n;
	}

	greet(msg: string) {
		console.log(`Hi ${this.name}! ${msg}`);
	}
}

let user1: Greeting = new Person('Mike');
user1.greet('Good Morning...');

/// Function types

type AddFn = (a: number, b: number) => number;

// interface AddFn {
// 	(a: number, b: number): number;
// }

let addfun: AddFn;

addfun = (n1: number, n2: number) => {
	return n1 + n2;
};
