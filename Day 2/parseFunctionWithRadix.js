// radix specifies the base of the number in the string
// Default: Base 10
function convertToInteger(str){
    return parseInt(str, 2); // here 2 is the base that the string has
}

console.log(convertToInteger("10011"));