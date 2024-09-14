class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log('Username is ${this.username}');
        
    }

    static createid(){ // Static keyword will stop this function from inheritance.
        return '123'
    }
}

const abhay = new user("Abhay")
console.log(abhay.createid()); // it will show the error.


class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("ipphone","iphone@gmail.com")
iphone.logme()

console.log(iphone.createid()); // It will show the error. 

