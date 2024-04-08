function Disable(_: object, _1: string, descriptor: PropertyDescriptor) {
	descriptor.value = () => {
		console.log('foo 2');
	};
}

function Before(hook: Function) {
	return function <T extends Function>(
		_: object,
		_1: string,
		descriptor: PropertyDescriptor
	): PropertyDescriptor {
		return {
			get: function (this: T) {
				let originalMethod = descriptor.value.bind(this);
				hook = hook.bind(this);

				return () => {
					hook();
					originalMethod();
				};
			},
		};
	};
}

function Capitalize() {
	return function <T extends new (...args: any[]) => {}>(
		originalConstructor: T
	) {
		return class extends originalConstructor {
			_a = 'A';
			_b = 'B';
		};
	};
}

@Capitalize()
class WhatEver {
	private _a: string = 'a';
	private _b: string = 'b';
	@Disable
	foo() {
		console.log('foo');
	}

	@Before(() => console.log('Before hook'))
	bar() {
		console.log('bar');
	}

	baz() {
		console.log(this._a, this._b);
	}
}

const whatEver = new WhatEver();
whatEver.foo(); // Throws an error: Method disabled
whatEver.bar(); // Outputs: bar
whatEver.baz();
