//objectFunctions

//_.findKey

export function findKey(obj, checkFunction) {
	let resultObject = [];
	for (let key in obj){
		if(checkFunction(obj[key])){
			resultObject.push(key);
		}					
	}
	if (resultObject.length == 0){
		return undefined
	}
	else{
		return resultObject.join(", ");
	}
}

//_.pick

export function pick(object, ...values){
	let newObject = {};
	for(let key in object){
		if (values.includes(key)){
			newObject[key] = object[key];
		}		
	}
	return newObject;
}

//_.omit

export function omit(object, ...values){
	let newObject = {};
	for (let key in object){
		if(!values.includes(key)){
			newObject[key] = object[key];
		}
	}
	return newObject;
}

//_.keys

export function keys(object){
	return Object.keys(object);
}

//_.values

export function values(object){
	return Object.values(object);
}

// _.get

export function get(object, path, defaultValue){
	path = (Array.isArray(path))? path : path.split(".");
	let key = object;
	key = key[path[0]];
	if (key&&path.length>1){
		return get(key, path.slice(1), defaultValue);
	}	
		return (key === undefined)? defaultValue : key;	
}

//_.unset

export function unset(object, path){
	path = (Array.isArray(path))? path.join(".") : path;
	let str = "object." + path;
	 return eval("delete " + str);
}
