function check() {
    var i = "function";
  
    if (true) {
      var i = "block";
      console.log(i);
    }

    console.log(i);
  }
  
  check();

  /*
  OUTPUT: 
  block
  block
  */

  function check() {
    let i = "function";
  
    if (true) {
      let i = "block";
      console.log(i);
    }

    console.log(i);
  }
  
  check();

  /*
  OUTPUT: 
  block
  function
  */