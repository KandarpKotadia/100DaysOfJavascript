const s = [5, 7, 2];
function editInPlace(){
    //s = [2, 5, 7]; //we cannot do this as it will generate an error

    // but assigning it like this will work
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}

editInPlace();
console.log(s);