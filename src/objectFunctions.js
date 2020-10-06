// objectFunctions
import { validObject } from './validation';
// _.findKey

export function findKey(obj, checkFunction) {
	 if (validObject(object)) {
    const resultObject = [];
    for (const key in obj) {
      if (checkFunction(obj[key])) {
        resultObject.push(key);
      }
    }
    if (resultObject.length == 0) {
      return undefined;
    }

    return resultObject.join(', ');
	 }
	 return 'invalid values, clear object require';
}

// _.pick

export function pick(object, ...values) {
  if (validObject(object)) {
    const newObject = {};
    for (const key in object) {
      if (values.includes(key)) {
        newObject[key] = object[key];
      }
    }
    return newObject;
  }
  return 'invalid values, clear object require';
}

// _.omit

export function omit(object, ...values) {
  if (validObject(object)) {
    const newObject = {};
    for (const key in object) {
      if (!values.includes(key)) {
        newObject[key] = object[key];
      }
    }
    return newObject;
  }
  return 'invalid values, clear object require';
}

// _.keys

export function keys(object) {
  if (validObject(object)) {
    return Object.keys(object);
  }
  return 'invalid values, clear object require';
}

// _.values

export function values(object) {
  if (validObject(object)) {
    return Object.values(object);
  }
  return 'invalid values, clear object require';
}

// _.get

export function get(object, path, defaultValue) {
  if (validObject(object)) {
    path = (Array.isArray(path)) ? path : path.split('.');
    let key = object;
    key = key[path[0]];
    if (key && path.length > 1) {
      return get(key, path.slice(1), defaultValue);
    }
    return (key === undefined) ? defaultValue : key;
  }
  return 'invalid values, clear object require';
}

// _.unset

export function unset(object, path) {
  if (validObject(object)) {
    path = (Array.isArray(path)) ? path.join('.') : path;
    const str = `object.${path}`;
    return eval(`delete ${str}`);
  }
  return 'invalid values, clear object require';
}
