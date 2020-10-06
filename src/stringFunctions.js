// stringFunctions
import { validString, validNumber } from './validation';

// _.endsWith
export function endsWith(string, target, position) {
  if (validString(string)) {
    if (position == undefined) {
      position = string.length - 1;
    } else {
      (validNumber(position)) ? position--
        : console.log('invalid values, position should be number');
    }
    const result = (string[position] == target);
    return result;
  }
  return 'invalid values, string require';
}

// _.startsWith
export function startsWith(string, target, position) {
  if (position == undefined) {
    position = 0;
  } else {
    (validNumber(position)) ? position
      : console.log('invalid values, position should be number');
  }
  return !!(string.startsWith(target, position));
}

// _.toUpper
export function toUpper(string) {
  if (validString(string)) {
    return string.toUpperCase();
  }
  return 'invalid values, string require';
}
// _.toLower
export function toLower(string) {
  if (validString(string)) {
    return string.toLowerCase();
  }
  return 'invalid values, string require';
}

// _.capitalize
export function capitalize(string) {
  if (validString(string)) {
    string = string.toLowerCase();
    return string[0].toUpperCase() + string.slice(1);
  }
  return 'invalid values, string require';
}

// _.lowerFirst
export function lowerFirst(string) {
  if (validString(string)) {
    return string[0].toLowerCase() + string.slice(1);
  }
  return 'invalid values, string require';
}

// _.upperFirst
export function upperFirst(string) {
  if (validString(string)) {
    return string[0].toUpperCase() + string.slice(1);
  }
  return 'invalid number, string require';
}
// _.repeat
export function repeat(string, multiplier = 1) {
  if (validString(string) && validNumber(multiplier)) {
    let result = '';
    for (let i = 0; i < multiplier; i++) {
      result += string;
    }
    return `'${result}'`;
  }
  return 'invalid values, it should be string and number';
}

// _.split
export function split(string, separator, limit) {
  if (validString(string) && (validNumber(limit) || limit === undefined)) {
    return string.split(separator, limit);
  }
  return 'invalid values, it should be string and number as limit';
}

// trim
export function trim(string, chars = /\W/) {
  if (validString(string)) {
    const reg = new RegExp(chars, 'g');
    return string.replace(reg, '');
  }
  return 'invalid values, string require';
}

// _.camelCase
export function camelCase(string) {
  if (validString(string)) {
    const arrString = string.split(/\W/g);
    const clearArr = [];
    for (let i = 0; i < arrString.length; i++) {
      if (arrString[i] !== '') {
        clearArr.push(arrString[i]);
      }
    }
    const firstWord = clearArr[0].toLowerCase();
    let result = firstWord;
    for (let i = 1; i < clearArr.length; i++) {
      result += capitalize(clearArr[i]);
    }
    return result;
  }
  return 'invalid values, string require';
}

// _.kebabCase
export function kebabCase(string) {
  if (validString(string)) {
    const arrString = string.split(/\W/g);
    const clearArr = [];
    for (let i = 0; i < arrString.length; i++) {
      if (arrString[i] !== '') {
        clearArr.push(arrString[i]);
      }
    }
    const newArr = clearArr.map((item) => item.toLowerCase());
    return newArr.join('-');
  }
  return 'invalid values, string require';
}

// _.lowerCase
export function lowerCase(string) {
	 if (validString(string)) {
    const arrString = string.split(/\W/g);
    const clearArr = [];
    for (let i = 0; i < arrString.length; i++) {
      if (arrString[i] !== '') {
        clearArr.push(arrString[i]);
      }
    }
    const newArr = clearArr.map((item) => item.toLowerCase());
    return newArr.join(' ');
	 }
	 return 'invalid values, string require';
}

// _.snakeCase
export function snakeCase(string) {
	 if (validString(string)) {
    const arrString = string.split(/\W/g);
    const clearArr = [];
    for (let i = 0; i < arrString.length; i++) {
      if (arrString[i] !== '') {
        clearArr.push(arrString[i]);
      }
    }
    const newArr = clearArr.map((item) => item.toLowerCase());
    return newArr.join('_');
	 }
	 return 'invalid values, string require';
}

// _.upperCase
export function upperCase(string) {
	 if (validString(string)) {
    const arrString = string.split(/\W/g);
    const clearArr = [];
    for (let i = 0; i < arrString.length; i++) {
      if (arrString[i] !== '') {
        clearArr.push(arrString[i]);
      }
    }
    const newArr = clearArr.map((item) => item.toUpperCase());
    return newArr.join(' ');
	 }
	 return 'invalid values, string require';
}

// _.startCase
export function startCase(string) {
  if (validString(string)) {
    let arrString = [];
    if (string.search(/\W/) == -1) {
      arrString = string.split(/(?=[A-Z])/);
    } else {
      arrString = string.split(/\W/g);
    }
    const clearArr = [];
    for (let i = 0; i < arrString.length; i++) {
      if (arrString[i] !== '') {
        clearArr.push(arrString[i]);
      }
    }
    let result = '';
    for (const item of clearArr) {
      if (item.search(/[a-z]/) == -1) {
        result = clearArr.join(' ').toUpperCase();
        return result;
      }

      const newArr = clearArr.map((i) => capitalize(i));
      return newArr.join(' ');
    }
  } else return 'invalid values, string require';
}
