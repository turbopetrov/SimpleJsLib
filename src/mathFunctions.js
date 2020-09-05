
//_.add
export function add(a,b) {
	return a+b;
}

//_.divide 
export function divide(divided, divisor) {
	return divided/divisor;
}

//_.sum
export function sum(array){
	let result = 0;
	for (let i = 0; i < array.length; i++){
			result+=array[i];
		}
		return result;
}
//_.max 
export function max(array) {
	let result;
	if (array.length == 0) {
		result = undefined;
	} else {
		result = Math.max.apply(null, array)
	}
	return result;
}
//_.min 
export function min (array) {
	let result;
	if(array.length == 0){
		result = undefined;
	} 
	else {
		result = Math.min.apply(null, array);
	}
	return result;
}

//_.mean
export function mean(array) {
	let sumArray = 0;
	for (let i = 0; i < array.length; i++) {
			sumArray+= array[i];
		}
	let result = sumArray/array.length;
	return result;
}
//_.multiply 
export function multiply(multiplier, multiplicand){
	return  multiplier*multiplicand;
}
//._substruct
export function substruct(minued, substrahend) {
	return minued - substrahend;
}
//_.round
export function round (number, precision) {
	return +number.toPrecision(precision) 
}
//_.ceil
export function ceil (number, precision) {
	let k;
	(precision == undefined||0)?
	k = 1 : k = 10**precision;
	return +Math.ceil(number*k)/k;
}

//_.floor
export function floor(number, precision) {
	let k;
	(precision == undefined||0)? 
	k = 1 : k = 10**precision;
	return +Math.floor (number*k)/k;
}
