// javascript and classes

// Objects
// - collection of properties and methods
// - toLowerCase
// #why we use OOPs
/*
- Constructor Function
- Prototypes
- Classes
- Instances(new,this)
*/
// ## 4 pillars
/*
Abstraction
Encapsulation
Inheritance
Polymorphism
*/

const user = {
    username : "Abhay Sundriyal",
    LoginCount : 8,
    Signedin : true,

    Getuserdetail : function () {
        console.log("Get user Detail Successfully");
        console.log('Username : ${this.username}'); // it will give the vaue of username.
        console.log(this); // it will give whole object
        
      }
}
console.log(user.username);
console.log(this); // {}
console.log(user.Getuserdetail());


function user (username,isloggedin,logincount) {
    this.username = username;
    this.LoginCount = logincount;
    this.isloggedin = isloggedin

    this.greeting = function () {
        console.log('Welcome ${this.username} ');
        
      }

    return this
  }

  const user1 = new user("Abhay Sundriyal",true,18)
  const user2 = new user("Abhi Sundriyal",false,15) // it will overwrite the program so we use new keyword in both the cases.
  console.log(user1);
  console.log(user2);


  
