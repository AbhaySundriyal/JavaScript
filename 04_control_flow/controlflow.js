const temp = 41
if (temp ===41){
    console.log("temperature is exact 41 ");
} else{
    console.log("tempretature is not exact");
} 

const score = 200
if (score > 100) {
    const power = "fly"
    console.log('user power is ${power}'); // user power is fly 
}
console.log('user power is ${power}'); // power is not defined 

const balance = 1000
if (balance > 500) console.log("test"),
console.log("test2"); // IT IS SHORT HAND NOTATION BUT NOT GOOD FOR READABILITY.

// NESTED IF STATEMENT 
const balance = 1000
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
}else if (balance < 900) {
    console.log("less than 900");
} else{
    console.log("less than 1200");
}

if (isloggedin && debitcard && 2==2) {
    console.log("Allow The user for buying");
} // && is used for and operator . 

if (isloggedinfrommail || isloggedinfromgoogle) {
    console.log("Allow The user for buying");
} // || is used for or operator . 

// SWITCH CASE
const month = 4 
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
// So on ..... 
    default:
        console.log("Default case ");
        break;
} // IF WE NOT USE BREAK STATEMENT THEN IT WILL RUN WHOLE CODE EXCEPT DEFAULT . 

if (username) {
    console.log("Got user email");
} else {
    console.log("Don't have user email. ");
}
// FALSY VALUES
// FALSE , 0 -0 , BIGINT 0n , "",null,undefined , Nan
// Except all are truthy values.  

// TRUTHY VALUES 
// "0" , "False"," ", [] , {},function (){}