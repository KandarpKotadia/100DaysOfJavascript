const sum = (function(){
    return function sum(x, y, z){
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();

// this can be now rewritten to
const sum1 = (function(){
    return function sum(...args){ // here ... is the rest operator, it accepts any number of arguments
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 3));
console.log(sum1(1, 2, 3));