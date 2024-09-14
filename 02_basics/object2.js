// *************** OBJECT********************

// Object in singelton , using Constructor

const tinderuser = new Object()
tinderuser.id = "123ac"
tinderuser.name = "Abhay Sundriyal"
tinderuser.isloggedin = false

console.log(tinderuser); // {id: '123abc' , name : 'abhay Sundriyal',isloggedin : false}

const regularuser ={
    email : "abhaysu9@gmail.com"
    fullname :{
        username : {
            firstname : "Abhay",
            lastname : "Sundriyal"
        }
    }
}
console.log(regularuser.fullname.username);

console.log(regularuser.fullname?.username); // ? is used because it will check that full name exist  or not if yes then it go further otherwise no. 

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3); // {1:'a',2:'b',3:'a',4:'b'}

const obj3 = {...obj1,...obj2}
console.log(obj3);

const user =[
    {
        id : '1',
        email : 'abhaysu9@gmail.com'
    },
    {
        id : '2',
        email : 'abhysu9@gmail.com'
    },   
]
user[1].email

console.log(Object.keys(tinderuser)); // only give key names
console.log(Object.values(tinderuser));// only give values 
console.log(Object.entries(tinderuser));// give whole object with key and values in array 

console.log(tinderuser.hasOwnProperty(isloggedin)); // true , it check certain thing is present in it or not . 