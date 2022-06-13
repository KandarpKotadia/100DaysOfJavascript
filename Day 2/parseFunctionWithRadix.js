// radix specifies the base of the number in the string
// Default: Base 10
function convertToInteger(str){
    return parseInt(str, 2);
}

console.log(convertToInteger("10011"));