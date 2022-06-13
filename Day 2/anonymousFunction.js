var magic = function(){ // here this function that id assigned to variable magic is anonyous as it has no name
    return new Date();
};


// we can use arrow function to write anonymous function
// For eg:
var magic = () => { // here the function keyword is removed and an arrow is placed after the braces
    return new Date();
};


// Shortening this even more leads it to
var magic = () => new Date();