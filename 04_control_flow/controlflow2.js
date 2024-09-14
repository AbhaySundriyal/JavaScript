 // TO CHECK WHETHER ARRAY IS EMPTY OR NOT .   
username = []
if (username.length === 0 ) {
    console.log("Array is empty");
} 

 // TO CHECK WHETHER OBJECT IS EMPTY OR NOT . 

 const emptyobj = {}
 if (Object.keys(emptyobj).length === 0 ) {
    console.log("Object is empty");
 }

 false == 0 // true 
 false == '' //true
  0 == '' // true

  // NULLISH COALESCING OPERATOR (??) : NULL , UNDEFINED
  let val1 = 5 ?? 10 // 5
  let val1 = null ?? 10 // 10
  let val1 = undefined ?? 10 // 10
  let val1 = null ?? 10 ?? 20 // 10
  console.log(val1);

  // TERNARY OPERATOR
  
  // Syntax :- condition ? true : false

  const price = 100
  price < 80 ? console.log("less than 80") : console.log("more than 80") // more than 80 . 