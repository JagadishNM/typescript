function someFun(
	num1: number,
	num2: number,
	callBack: (val: number) => number
): number {
	const res = num1 + num2;
	return callBack(res);
}

function multiply(x: number): number {
	return x * 2;
}

const n = someFun(5, 3, multiply);
console.log(n);
