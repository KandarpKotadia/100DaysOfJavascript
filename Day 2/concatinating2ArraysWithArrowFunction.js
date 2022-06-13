// here we are concatinating with the help of arguments
var concat = function(arg1, arg2){
    return arg1.concat(arg2);
}

// This function can be rewritten into following way using arrow function:

var concat = (arg1, arg2) => arg1.concat(arg2);

console.log(concat([1, 2], [3, 4, 5]));