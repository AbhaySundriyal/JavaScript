// ********** LOCAL AND GLOBAL SCOPE***********

if (true){
    let a=10
    const b = 20
    var c=30
}
console.log(a); // a is not defined
console.log(b); // b is not defined
console.log(c); // 30 which create problem so we should not use var . 

let a=300 // global scope
if (true){
    let a=10 // block scope 
    const b = 20
    console.log("inner is" , a); // 10
}
console.log(a); // 300

function one (){
    const username = "Abhay"

    function two (){
        const website = "youtube"
        console.log(username);
    }
    console.log(website); // undefined website

    two() // Abhay
}
one()

if (true) {
    const username = "Abhay"
    if (true){
        const website=" youtube "
        console.log(username+website); // Abhay youtube
    }
    console.log(website); // website is undefined
}
console.log(username); // username is undefined

// **************************INTERSETING ******************************

addone(5) // 6
 function addone(num){
    return num+1
 }

 addtwo(5) // cannot access addtwo before intialization . 
 const addtwo = function (num) {
    return num+2
   }
