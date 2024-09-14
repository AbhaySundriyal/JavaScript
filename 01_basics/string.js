const name="abhay"
const repocount =50
console.log(name+repocount+" value");// abhay50 value but do not use this method it is outdated

console.log('my name is ${name} and my repocount is ${repocount} ');//my name is abhay and my repocount is 50

//****************Another ay to declare string */

const name1= new String('abhay') // string('Abhay') , 0:'h' gives key pairs , give lenth of string , 
//gives prototypes and methods

//*********** access key values */

console.log(name[0]); // a

//******* Syntax to use prototpes */

console.log(name1.__proto__);// but we can access prototypes without __proto__ 

console.log(name1.length);//5
console.log(name1.toUpperCase());//ABHAY
console.log(name1.charAt(2));//h
console.log(name1.indexOf('h'));//2

const newstr1 = name1.substring(0,4)
console.log(newstr1);//abha but 4 is exculde in this and it not allow neg. value 

const newstr1 = name1.slice(-8,4)
console.log(newstr1);// ite and it allow neg. value

const str2 = "  Abhay   "
console.log(str2);//  Abhay  
console.log(str2.trim());//Abhay remove all spaces 

str3="abc_123"
console.log(str3.replace('_','='));//abc=123