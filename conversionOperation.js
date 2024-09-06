let score = "aryan";

console.log(typeof score);
 
let valueNumber = Number(score);

console.log(typeof valueNumber);

console.log(valueNumber);

// when a number is converted from a string to number it is converted to number
// it is converted 
//  but if we try do convert any datatype to some other that is not possible in 
// context of programming then we should not do it,
// it will result in NaN

let doExist = "hello";
let booleandoExist = Boolean(doExist);

console.log(booleandoExist);

// 1 => true, 0 => false;
// "" => false, "hello" => true;