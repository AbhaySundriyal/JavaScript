// ******** FUNCTION WITH ARRAY AND OBJECT**********
function Calculatecartprice (...num1){
    return num1
}
console.log(Calculatecartprice(222,43,324,4321)); // [222,43,324,4321]

const user ={
    name : "Abhay",
    price : 299
}

function handleobject (anyobject){
    console.log('usrename is ${anyoject.name} and price is ${anyobject.price}');
}
handleobject(user) // Output :- username is abhay and price is 299

//Another way to print object
handleobject({
    name: "sam ",
    price :299
})

const mynewarray = [200,300,456,765]
function returnsecondarray(anyarray){
    return anyarray[1]
}
console.log(returnsecondarray(mynewarray)); // 300 
console.log(returnsecondarray([200,300,456,765])); // 300 