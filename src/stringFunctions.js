//stringFunctions
import {validString, validNumber} from './validation';

//_.endsWith
export function endsWith (string, target, position) {
	if (validString(string)){
		if (position == undefined){
    position = string.length - 1;
}
else {
    (validNumber(position))? position-- : 
    console.log( "invalid values, position should be number");
}
	let result = (string[position] == target)? true : false;
	return result;
	}
	else return 'invalid values, string require';
}

//_.startsWith
export function startsWith(string, target, position) {
	if (position == undefined){
		position = 0;
	}
	else {
		(validNumber(position))? position : 
		console.log( "invalid values, position should be number");
	}
	return (string.startsWith(target, position))? true:false;
}


//_.toUpper
export function toUpper (string) {
	if (validString(string)){
		return string.toUpperCase();
	}
	else return 'invalid values, string require';	
}
//_.toLower
export function toLower (string) {
	if (validString(string)) {
		return string.toLowerCase();
	}
	else return 'invalid values, string require';
}

//_.capitalize
export function capitalize(string){
	if (validString(string)) {
		string = string.toLowerCase();
		return string[0].toUpperCase() + string.slice(1);
	}
	else return 'invalid values, string require';			
}

//_.lowerFirst
export function lowerFirst(string) {
	if (validString(string)){
		return string[0].toLowerCase() + string.slice(1);
	}
	else return 'invalid values, string require';
}

//_.upperFirst
export function upperFirst(string) {
	if (validString(string)){
		return string[0].toUpperCase() + string.slice(1);
	}
	else return 'invalid number, string require';	
}
//_.repeat
export function repeat(string, multiplier = 1) {
	if (validString(string) && validNumber(multiplier)){
		let result = "";
		for (let i = 0; i < multiplier; i++){
			result = result+string; 
	
		}
		return "'"+result+"'";
	}
	else return 'invalid values, it should be string and number';
}

//_.split
export function split(string, separator, limit) {
	if (validString(string) && (validNumber(limit)|| limit === undefined)){
		return string.split(separator, limit)
	}
	else return 'invalid values, it should be string and number as limit';	
}

//trim
export function trim(string, chars = /\W/){
	if (validString(string) ){
		let reg = new RegExp(chars, "g");
		return string.replace(reg,"");	
	}
	else return 'invalid values, string require';	
}

//_.camelCase
export function camelCase (string) {
	if (validString(string)){
		let arrString = string.split(/\W/g);
			let clearArr = [];
			for (let i = 0; i < arrString.length; i++) {
				if (arrString[i] !== "") {
					clearArr.push (arrString[i]);
				}
			}
			let firstWord = clearArr[0].toLowerCase();
			let result = firstWord;
			for (let i = 1; i<clearArr.length; i++){
				result += capitalize(clearArr[i]);	
			}
			return result;
	}
	else return 'invalid values, string require';
	
}

//_.kebabCase
export function kebabCase(string) { 
	if (validString(string)){
		let arrString = string.split(/\W/g);
		let clearArr = [];
		for (let i = 0; i < arrString.length; i++) {
			if (arrString[i] !== "") {
				clearArr.push (arrString[i]);
				}
			}
			let newArr = clearArr.map(function(item){return item.toLowerCase()})
			return newArr.join("-");
	}
	else return 'invalid values, string require';	
}

 //_.lowerCase
 export function lowerCase(string){
	 if (validString(string)){
		let arrString = string.split(/\W/g);
		let clearArr = [];
		for (let i = 0; i < arrString.length; i++) {
		if (arrString[i] !== "") {
			clearArr.push (arrString[i]);
		}
	}
	let newArr = clearArr.map(function(item){return item.toLowerCase()})
	return newArr.join(" ");
	 }
	 else return 'invalid values, string require';	
 }

 //_.snakeCase
 export function snakeCase(string){
	 if (validString(string)){
	let arrString = string.split(/\W/g);
		let clearArr = [];
		for (let i = 0; i < arrString.length; i++) {
			if (arrString[i] !== "") {
				clearArr.push (arrString[i]);
			}
		}
		let newArr = clearArr.map(function(item){return item.toLowerCase()})
		return newArr.join("_");
	 }
	 else return 'invalid values, string require';	
 }

 //_.upperCase
 export function upperCase(string){
	 if (validString(string)){
	let arrString = string.split(/\W/g);
		let clearArr = [];
		for (let i = 0; i < arrString.length; i++) {
			if (arrString[i] !== "") {
				clearArr.push (arrString[i]);
			}
		}
		let newArr = clearArr.map(function(item){return item.toUpperCase()})
		return newArr.join(" ");
	 }
	 else return 'invalid values, string require';	
 }

//_.startCase
export function startCase(string){
	if (validString(string)){
	let arrString = [];
		if (string.search(/\W/) == -1){
			arrString = string.split(/(?=[A-Z])/);
		}
		else {
			arrString = string.split(/\W/g);
		}
		let clearArr = [];
		for (let i = 0; i < arrString.length; i++) {
			if (arrString[i] !== "") {
				clearArr.push (arrString[i]);
			}
		}
		let result = "";
		for (let item of clearArr){
			if(item.search(/[a-z]/) == -1){
				result = clearArr.join(" ").toUpperCase();
				return result;
			}
			else {
				let newArr = clearArr.map(function(i){return capitalize(i)});
				return newArr.join(" ");
			}
		}
	}
	else return 'invalid values, string require';	
}