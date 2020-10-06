// validation

export function validNumber(...[number]) {
  const valid = !!(isFinite(number));
  return valid;
}

export function validArray(array) {
  const valid = !!(Array.isArray(array));
  return valid;
}

export function validString(value) {
  const valid = (typeof (value) === 'string');
  return valid;
}
export function validObject(value) {
  const valid = (Object.getPrototypeOf(value) === Object.prototype);
  return valid;
}
