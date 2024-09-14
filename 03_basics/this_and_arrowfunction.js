//********* THIS KEYWORD AND ARROW FUNCTION */

const user ={
    username:"Abhay",
    price: 999,
    wecomemessage : function(){
        console.log('$(this.username) , Welcome to website');
        console.log(this);
    }
}
user.wecomemessage(); // Abhay , welcome to website and value of this is whole object 
user.username="sam"
user.wecomemessage(); // sam , Welcome to website and value of this is same but username changed to sam. 
console.log(this); // {}

function chai (){
    let username = "Abhay"
    console.log(this);
    console.log(this.username);
}
chai() // from this we get some values and fro this.username we get undefined so we cannot use this in function . we can only use yhis in object.

// HOW TO DECLARE ARROW FUNCTION 

const chai = () => {
    let username = "Abhay"
    console.log(this); // {}
    console.log(this.username); // undefined 
}
chai ()

// *** BASIC **
const addtwo = (num1,num2)=>{
    return num1+num2
}
console.log(addtwo(3,4));  // 7

//****** IMPLICIT RETURN */
const addtwo = (num1,num2)=> num1+num2
console.log(addtwo(3,4));// 7

const addtwo = (num1,num2) => (num+num2)
console.log(addtwo(4,5)); // 9

const addtwo = (num1,num2) => ({username:"Abhay"})
console.log(addtwo(4,5)); // {username:'Abhay'}