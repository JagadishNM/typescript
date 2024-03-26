// intersection types
type Admin = {
	name: string;
	privilages: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type Combine = Admin & Employee;

// union types
type param = string | number;

// intersection with classes
class Car {
	drive() {
		console.log('drive vehicle');
	}
}

class Truck {
	drive() {
		console.log('drive vehicle');
	}

	loadCargo(msg: string) {
		console.log(`Loaded ${msg}`);
	}
}

type Vehicle = Car | Truck;

let v1 = new Car();
let v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();
	if (vehicle instanceof Truck) {
		vehicle.loadCargo('boxes');
	}
}

useVehicle(v1);
useVehicle(v2);

// descriminated unions
interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';
	runningSpeed: number;
}

type Animal = Bird | Horse;

function getAnimalSpeed(animal: Animal) {
	let speed;
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed;
			break;
		case 'horse':
			speed = animal.runningSpeed;
			break;
	}

	console.log(speed);
}

getAnimalSpeed({ type: 'bird', flyingSpeed: 50 });
getAnimalSpeed({ type: 'horse', runningSpeed: 100 });

// Type Casting
let inputHnadle = document.querySelector('input') as HTMLInputElement;
inputHnadle.value = 'Hi';

// index properties
interface ErrorContainer {
	[prop: string]: string;
}

let errorBag: ErrorContainer = {
	email: 'Not found',
	userName: 'user name not found',
};

// Nullish coalescing
let user = null; // undefined

const data = user ?? 'Default';
console.log(data);
