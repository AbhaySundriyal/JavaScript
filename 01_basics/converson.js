let score=23

 console.log(typeof (score));

 let age ="19"
 let valueinNumber=Number(age)
 console.log(typeof age);// number

 let age ="19abc"
 let valueinNumber=Number(age)
 console.log(typeof age);// number

 console.log(valueinNumber); // NaN => not a number
 console.log(null); // 0
 console.log(undefined); // NaN
 console.log(true); // 1
 console.log(false); // 0
 console.log(hitesh); // NaN => not a number

 let isloggedin=1
 isloggedin= Boolean(isloggedin);
 console.log(isloggedin); // True 
 console.log(isloggedin); // if islogedin is 0 output is 0
 console.log(isloggedin); // if we write empty string output is false 
 console.log(isloggedin); // if we write anything output is True 

 let somenumber=33
let stringNumber=String(somenumber)
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string

//***************operations*************************

let value =3
let negvalue= -value
console.log(negvalue);// -3

console.log(2+2);//4
console.log(2-2);//0
console.log(2*2);//4
console.log(2/2);//1
console.log(2%2);//0
console.log(2**2);//4

let str1="hello"
let str2=" Abhay Sundriyal"
let str3=str1+str2
console.log(str3);// hello Abhay sundriyal

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32
console.log(1+3*2%2/5);// do not use  operations in this typical method

console.log(+true);//1 if we write '+' conversion happen 
console.log(+"");//0 if we write '+' conversion happen 

let gamecounter = 100
gamcounter++//prefix
++gamecounter//postfix
console.log(gamecounter);// 101




