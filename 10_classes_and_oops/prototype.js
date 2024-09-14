let myname = "Abhay     "
String.prototype.truelength = function () {
    console.log('${this}');
    console.log('true length is : ${this.trim().length }');
  }
  myname.truelength()
  "hello ".truelength()






let myheroes = ["thor","spiderman"]

let heropower = {
    thor : "hammer",
    spiderman : "sping"
}

Object.prototype.abhay = function(){
    console.log("Abhay is present in everywhere");
}

Array.prototype.abhay2 = function () {
    console.log("hello");
  }

heropower.abhay() // Abhay is present in everywhere . 
myheroes.abhay() // Abhay is present in everywhere . 
myheroes.abhay2() // hello
heropower.abhay2()//error


// Inheritance 

const user = {
    username : "Abhay",
    email : "abhaysu9@gmail,com"
}

const teacher = {
    makevideo : true
}

const teachingsupport = {
    available : false
}

const TASupport = {
    makeAssignment : 'js assignment',
    fulltime : true,
    __proto__ :teachingsupport
}
teacher.__proto__ = user
Object.setPrototypeOf(teachingsupport,teacher)

