//stringFunctions

//_.endsWith
function endsWith (string, target, position) {
	(position == undefined)? position = string.length - 1 : position--;
	let result = (string[position] == target)? true : false;
	return result;
}

//_.startsWith
function startsWith(string, target, position) {
	(position == undefined)? position = 0 : position;
	return (string.startsWith(target, position))? true:false;
}


//_.toUpper
function toUpper (string) {
	return string.toUpperCase();
}
//_.toLower
function toLower (string) {
	return string.toLowerCase();
}

//_.capitalize
function capitalize(string){
	string = string.toLowerCase();
	return string[0].toUpperCase() + string.slice(1);		
}

//_.lowerFirst
function lowerFirst(string) {
	return string[0].toLowerCase() + string.slice(1);
}

//_.upperFirst
function upperFirst(string) {
	return string[0].toUpperCase() + string.slice(1);
}
//_.repeat
function repeat(string, multiplier) {
	let result = "";
	for (let i = 0; i < multiplier; i++){
		result = result+string; 

	}
	return "'"+result+"'";
}

//_.split
function split(string, separator, limit) {
	return string.split(separator, limit)
}

//trim
function trim(string, chars){
	let reg = new RegExp(chars, "g")
	return string.replace(reg,"");	
}
//_.camelCase
function camelCase (string) {
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

//_.kebabCase
function kebabCase(string){
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
 //_.lowerCase
 function lowerCase(string){
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

 //_.snakeCase
 function snakeCase(string){
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

 //_.upperCase
 function upperCase(string){
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

//_.startCase

function startCase(string){
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