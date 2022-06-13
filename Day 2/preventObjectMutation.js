function freezeObj(){
    const MATH_CONSTANTS = {
      PI : 3.14
    };
    
    Object.freeze(MATH_CONSTANTS); // this line freezes the object and renders it immutable and therefore the line in try block generates an error
    // if this line is commented out, the value of the constant variable MATH_CONSTANTS is changed by the line in the try block
    
    try{
      MATH_CONSTANTS.PI = 99;
    }catch(ex){
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  
  const PI = freezeObj();
  console.log(PI);