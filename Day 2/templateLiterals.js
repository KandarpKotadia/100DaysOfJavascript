const person = {
    name : "Zodiac Hasbro",
    age : 56
};

// template literals are made using backtick `` . template literals are a special type of strings.
// we can put single and double quotation marks in the string without escaping. we can also put variables in the string easily
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);


//  *** CODING CHALLENGE ***

const  result = {
    success : ["max-length", "no-amd", "prefer-arrow-functions"],
    failure : ["no-var", "Var-on-top", "linebreak"],
    skipped : ["id-backlist", "no-dup-keys"],
};

function makeList(arr){
    const resultDisplayArray = [];
    for(var i = 0;i < arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    
    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);