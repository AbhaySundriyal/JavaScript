// ********* IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) *********

(function  chai() {
    // It is named IIFE
    console.log('DB Connected');
  }) ();

  ( () => {
    console.log('DB Connected Two');
  }) ();
  
  ( (name) => {
    console.log('DB Connected Two ${name}');
  }) ('Abhay Sundriyal');