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