// FOR LOOP

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);    
} // print from 1 to 9 

console.log(element); // wlwmwnt is undefined . 

for (let i = 0; i < 5; i++) {
    console.log('outer loop is ${i}');
    for (let j = 0; j < 5; j++) {
        console.log('inner loop is ${j}');    
    }    
}

let myarray =["batman","flash","Superman"]
for (let index = 0; index < myarrayarray.length; index++) {
    const element = myarrayarray[index];
    console.log(element);
} // batman
  // flash
  // Superman

  // BREAK AND CONTINUE KEYWORD 
  for (let i = 0; i <=20; i++) {
    if (i==5) {
        console.log('Detected 5');
        break
    }
    console.log('Value of i is ${i}');    
  } // OUTPUT
    // Value of i is 1 
    // Value of i is 2
    // Value of i is 3
    // Value of i is 4
    // Detected 5

    // CONTINUE
    for (let i = 0; i <=10; i++) {
    if (i==5) {
        console.log('Detected 5');
        continue
    }
    console.log('Value of i is ${i}');    
  } // OUTPUT
    // Value of i is 1 
    // Value of i is 2
    // Value of i is 3
    // Value of i is 4
    // Detected 5
    // Value of i is 6 
    // Value of i is 7
    // Value of i is 8
    // Value of i is 9