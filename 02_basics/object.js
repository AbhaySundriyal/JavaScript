//******************* OBJECT *****************



// How to create a object 
const JsUser={
    name:"Abhay Sundriyal",
    age : 19,
    location : "Delhi",
    email:"abhaysu9@gmail.com",
    isLoggedIn: false,
    Lastloggedin=["monday","Saturday"]
 }

 // how to access the object 
 
 console.log(JsUser.age);
 console.log(JsUser[age]);// we should use this process because if  "full name" : "Abhay Sundriyal" in object there is only this method which is used to access this element.

 // how to create a symbol 

 const mysym = Symbol ("key1")

 const JsUser={
    name:"Abhay Sundriyal",
    age : 19,
    [mysym] : "mykey1", // how to use symbol as a key 
    location : "Delhi",
    email:"abhaysu9@gmail.com",
    isLoggedIn: false,
    Lastloggedin=["monday","Saturday"]
 }
 console.log(JsUser[mysym]);// 
 console.log(typeof JsUser[mysym]);// symbol becuase we use [mysym] : "mykey1" in object 
 
 console.log(JsUser[mysym]);// 
 console.log(typeof JsUser.mysym);// string becuase we do not use [mysym] : "mykey1" in object.  

 // how to change the value of object

 JsUser.email="Abhaysu9@gmail.com"

 // Not to change the object elements 

 Object.freeze(JsUser) // now it not allow anyone to change the elements value in jsuser object

 // how to add function in object 

 JsUser.greeting = function () {
    console.log("Hello JS user ");
   }
console.log(JsUser.greeting); // function (anonymous)
console.log(JsUser.greeting()); // Hello JS user

 JsUser.greetingTwo = function () {
    console.log('Hello JS user , $(this.name)');
   }
console.log(JsUser.greeting); // function (anonymous)
console.log(JsUser.greetingTwo()); // Hello JS user, Abhay Sundriyal


