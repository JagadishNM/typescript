function Logger(longString: string) {
	return function (constructor: Function) {
		console.log(longString);
		console.log(constructor);
	};
}

@Logger('LONG - String')
class Person1 {
	constructor() {
		console.log('Person1 class');
	}
}
