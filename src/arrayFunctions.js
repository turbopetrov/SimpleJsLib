// arrayFunctions
// _.compact

export function compact(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== false
			&& array[i] !== null
			&& array[i] !== undefined
			&& array[i] !== NaN
			&& array[i] !== '') {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// _.concat

export function concat(array, ...[values]) {
  return array.concat(values);
}

// _.head

export function head(array) {
  for (const i of array) {
    return array[0];
  }
}

// _.drop

export function drop(array, n) {
  array.splice(0, n);
  return array;
}

// _.last

export function last(array) {
  const i = array.length - 1;
  return array[i];
}

// _.tail

export function tail(array) {
  const i = array.length;
  return array.slice(1, i);
}

// _.take

export function take(array, n) {
  return array.slice(0, n);
}

// _.slice

export function slice(array) {
  const i = array.length - 1;
  return array.slice(0, i);
}

// _.reverse

export function reverse(array) {
  return array.reverse();
}

// _.remove

export function remove(array, checkFunction) {
  const newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (checkFunction(array[i]) && array[i] !== 0) {
      newArr.push(array[i]);
      array.splice(i, 1);
    }
  }
  return newArr.reverse();
}

// ._join

export function join(array, separator) {
	 return array.join(separator);
}

// _.initial

export function initial(array) {
  const b = array.length - 1;
  return array.splice(0, b);
}

// _.nth

export function nth(array, n) {
  if (n < 0) {
    const i = array.length - 1 + n;
    return array[i];
  }
  return array[n];
}

// _.pull

export function pull(array, ...values) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (values.includes(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
}

// _.flatten

export function flatten(array) {
  return [].concat.apply([], array);
}
const flattenDeep = function (array, result = []) {
  for (let i = 0, { length } = array; i < length; i++) {
	  const item = array[i];
	  if (Array.isArray(item)) {
      flattenDeep(item, result);
	  } else {
      result.push(item);
	  }
  }
  return result;
};

// _.intersection

export function intersection(...values) {
  flattenDeep(values, conArr = []);
  function compareNumeric(a, b) {
    return a - b;
	  }
	   conArr.sort(compareNumeric);
	   const uniqArr = [];
	  	for (let i = 0; i < conArr.length - 1; i++) {
			  if (conArr[i] === conArr[i + 1]) {
				  uniqArr.push(conArr[i]);
			  }
		  }
	   return uniqArr;
}

// _.uniq

export function uniq(...values) {
  flattenDeep(values, conArr = []);
  function compareNumeric(a, b) {
    return a - b;
	  }
	   conArr.sort(compareNumeric);
	   const uniqArr = [];
	  	for (let i = 0; i < conArr.length - 1; i++) {
			  if (!uniqArr.includes(conArr[i])) {
				  uniqArr.push(conArr[i]);
			  }
		  }
	   return uniqArr;
}

// _.difference

export function difference(array, ...values) {
  flattenDeep(values, valuesArr = []);
  const resultArr = [];
  for (const item of array) {
    if (!valuesArr.includes(item)) {
      resultArr.push(item);
    }
  } return resultArr;
}
