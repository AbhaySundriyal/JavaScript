//2 types of datatypes=>

// primitive(call by value)

const id=Symbol("123")
const otherid=Symbol("123")
console.log(id===otherid);// false because symbol gives unique id

const bigNumber= 3242443343523n// n make number bigint

console.log(typeof bigNumber); // undefined
console.log(typeof id ); // Symbol
// 7 types :- String,numebr,Boolean,null,Symbol,BigInt

//reference (non-primitive)

//array, Objects,Functions 

//array and object :-

const heroes = ["shaktiman","flying jatt","bheem","thanos"]
let myobj = {
    name :"Abhay",
    age:19
}

//functions:-

const myfunction=Function({
    console.log("Hello World"); // print:- Hello World 
})
console.log(typeof myfunction); // Function also called  function object


//**************************************Stack and Heap Memory***********************************************

// Stack Memory (used in primitive data types) and Heap Memory (used in Non-primitive)


let myname = "AbhaySundriyal"
let aname = myname
aname="hello"
console.log(myname);// AbhaySundriyal
console.log(aname);// hello

let user1={
    mail:"abc@gmail.com",
    upi:"iajha"
}

let user2 = user1

user2.mail = "abcdefghi@gamil.com"

console.log(user1.mail);//abcdefghi@gmail.com
console.log(user2.mail);//abcdefghi@gmail.com
