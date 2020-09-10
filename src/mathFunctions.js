import {validNumber, validArray} from './validation';


//_.add
export function add(a,b) {
	if (validNumber(a,b)){
	return a+b;
	}
	else{
		return "invalid values, number require"
	}
}

//_.divide 
export function divide(divided, divisor) {	
	if (validNumber(divided,divisor)){
		return divided/divisor;
		}
		else{
			return "invalid values, number require"
		}
}

//_.sum

export function sum(array){
	if(validArray(array)){
		let result = 0;
		for (let i = 0; i < array.length; i++){
				result+=array[i];
			}
			return result;	
	}
	else return "invalid values, array require";	
}

//_.max 
export function max(array) {
	if(validArray(array)){
		let result;
		if (array.length == 0) {
			result = undefined;
		} else {
			result = Math.max.apply(null, array)
		}
		return result;
	}
	else return "invalid values, array require";
	
}
//_.min 
export function min (array) {
	if(validArray(array)) {
	let result;
		if(array.length == 0){
			result = undefined;
		} 
		else {
			result = Math.min.apply(null, array);
		}
		return result;
	}
	else return "invalid values, array require";	
}

//_.mean
export function mean(array) {
	if(validArray(array)) {
	let sumArray = 0;
		for (let i = 0; i < array.length; i++) {
				sumArray+= array[i];
			}
		let result = sumArray/array.length;
		return result;
	}
	else return "invalid values, array require";	
}

//_.multiply 
export function multiply(multiplier, multiplicand){
	if (validNumber(multiplier, multiplicand)){
	return  multiplier*multiplicand;
	}
	else return "invalid values, number require";
}

//._substruct
export function substruct(minued, substrahend) {
	if (validNumber(minued, substrahend)){
	return minued - substrahend;
	}
	else return "invalid values, number require";
}

//_.round
export function round (number, precision) {
	if (validNumber(number, precision)){
		return +number.toPrecision(precision); 
	}
	else return "invalid values, number require";
	
}
//_.ceil
export function ceil (number, precision) {
	if (validNumber(number, precision)){
		let k;
		(precision == undefined||0)?
		k = 1 : k = 10**precision;
		return +Math.ceil(number*k)/k;
	}
	else return "invalid values, number require";
	
}

//_.floor
export function floor(number, precision) {
	if (validNumber(number, precision)) {
		let k;
	(precision == undefined||0)? 
	k = 1 : k = 10**precision;
	return +Math.floor (number*k)/k;
	}
	else return "invalid values, number require";
}


