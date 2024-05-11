function LocalStorage(key: string) {
	return (target: any, propertyKey: string) => {
		let currentValue: any = target[propertyKey];
		console.log(currentValue);
		Object.defineProperty(target, propertyKey, {
			set: (newValue: any) => {
				localStorage.setItem(key, newValue);
			},
			get: () => {
				return localStorage.getItem(key);
			},
		});
	};
}

class Game {
	@LocalStorage('gameType')
	public type!: string;
}

const obj = new Game();

obj.type = 'racing';

console.log(obj.type);
console.log(localStorage.getItem('gameType'));
