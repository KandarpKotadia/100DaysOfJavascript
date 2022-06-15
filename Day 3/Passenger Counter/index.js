let count = 0;

let welcomeEl = document.getElementById("welcome-el");
let name = "Kandarp!", greeting = "Welcome Back, ";

welcomeEl.innerText = greeting + name;

function increment(){
    document.getElementById("count-el").innerText = ++count;
}

// let saveEl = count;
let v = 0;

function save(){
    if(v == 0){
        document.getElementById("print-el").innerText = "Previous entries: " + count;
        v++;
    }else{
        document.getElementById("print-el").innerText += " - " + count;
    }
    count = 0;
    document.getElementById("count-el").innerText = count;
}