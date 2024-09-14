class user{
    constructor (username){
        this.username = username
    }

    logme(){
        console.log('Username is ${this.username}');
        
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email =email;
        this.password =password
    }

    addcourse(){
        console.log('new course was added by ${this.username}');
        
    }
}

const chai = new teacher("chai","abc@gmail.com","123")
chai.addcourse()

chai.logme()

const masalachai = new user("Abhay")
masalachai.logme()

console.log(chai === masalachai); // False

console.log(chai === teacher); // False

console.log(chai instanceof teacher); // True
console.log(chai instanceof user); // True



