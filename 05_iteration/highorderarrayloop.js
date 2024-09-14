// **************** HIGH ORDER ARRAY LOOP ***********

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    console.log(num); // It will automatically print all element in arr array.
}

const greeting = "Hello world "
for (const greet of greeting) {
    console.log('each character is ${greet}'); // it will print indiviual charater from greeting . 
}

// MAP 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('Fr',"France")
map.set('IN',"India")
console.log(map); // OUTPUT :- 'IN'=> "India" and so on but india will not print again . 

for (const [key , value] of map) {
    console.log(key , ':-',value);
}

const myobject = {
    'game1' : 'NFS'
    'game2' : 'Spiderman'y
}

for (const [key , value] of myobject) {
    console.log(key , ':-',value); // Object are not iterable . 
}

const myobject2 = {
    js : "javascript",
    cpp : "c++",
    rb :"ruby",
    swift :"Swift"
}

for (const key in myobject2) {
    console.log('${key} shortcut is ${myobject2[key]}');
} // OUTPUT :- js shortcut is for Javascript

const pro = ["js","py","rb","java","cpp"]

for (const key in pro) {
    console.log(key); // 0\n 1\n 2\n 3\n 4\n
    console.log(pro[key]); // now it give values .  
}

const cod = ["javascript" , "java","python","Cpp"]

cod.forEach( function (val){
    console.log(val); // It Will print all characters from cod array . 
})

cod.forEach( (item) => {   //   This is arrow Function  
    console.log(item);
})

function print (items) {
    console.log(items);
  }

cod.forEach(print) // It will print all the items in cod array . 

cod . forEach ( (item , index , arr){
    console.log(item , index , arr);
} )

const mycod = [
    {
        language : "javascript"
        languagefilename : "js"
    }
    {
        language : "java"
        languagefilename : "java"
    }
    {
        language : "python"
        languagefilename : "py"
    }
]

mycod.forEach( (item) => {
    console.log(item.languagefilename); // It will print all objects languagefilename
})