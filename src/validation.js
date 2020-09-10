//validation

export function validNumber(...[number]){
  let valid = (isFinite(number))? true:false;
  return valid;
}

export function validArray(array){
  let valid = (Array.isArray(array))? true:false;
  return valid;
}

