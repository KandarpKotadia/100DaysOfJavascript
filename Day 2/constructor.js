function makeClass(){
    class Thermostat{
        constructor (temp){
            this._temp = 5/9 * (temp - 32); // generally when initializing a private variable we use underscore and it signifies that the variable is not to be used outside the class or the scope.
        }

        get temperature(){
            return this._temp;
        }

        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const thermo = makeClass(); // here the makeClass function will return the Thermostat object
const thermos = new Thermostat(76); // here we are inputing the temperature in fahrenheit and then converting it to celsius
// "new" keyword is used to instantiate a new object
let temp = thermos.temperature; // here the get method from the class is called
thermos.temperature = 26; // here the set method from the class is called
console.log(temp);