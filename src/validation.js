//validation

export function validNumber(...[number]){
  let valid = (isFinite(number))? true:false;
  return valid;
}

export function validArray(array){
  let valid = (Array.isArray(array))? true:false;
  return valid;
}

export function validString (value) {
  let valid = (typeof(value) === "string")? true:false;
  return valid;
}
export function validObject(value){
  let valid = (Object.getPrototypeOf(value) === Object.prototype)?
  true:false;
  return valid;
}