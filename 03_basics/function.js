// ********* FUNCTION AND PARAMETER ***********

function hello (){
    console.log("hello");
    console.log("World");
}
hello() // Output  hello World

// Add two Numbers
function add (number1,number2){
    console.log(number1+number2);
}
add(4,5) // Output  9 but it not check given parameters is number or not.

function add (number1,number2){
    const result = number1+number2
    return result // or 
    return number1+number2
}
add(4,5) // output is 9 and its return the value 9
// Note : after return it will not execute another code in function.

function userloggedin(username){
    return '$(username) logged in'
}
console.log(userloggedin('Abhay')); // Abhay just logged in .
console.log(userloggedin()); // undefined just logged in .
// ** BOTH GIVE SAME OUTPUT
function userloggedin(username){
    if (username===undefined){
        console.log(" enter a username ");
        return
    }
    return '$(username) logged in'
}

function userloggedin(username){
    if (!username){
        console.log(" enter a username ");
        return
    }
    return '$(username) logged in'
}
// ** WANT TO GIVE DEFAULT PARAMETERS
function userloggedin(username= "ABHAY"){
    if (!username){
        console.log(" enter a username ");
        return
    }
    return '$(username) logged in'
}
console.log(userloggedin(username)); //  if user not give any name then by default abhay will take. 