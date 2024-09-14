function setusername(username) {
    // compelex DB calls
    this.username = username
  }

  function createuser(username,email,password) {
    setusername.call(this,username) // After writing call and this it will give correect output . 
    this.email = email
    this.password = password
    }

    const chai = new createuser("Abhay","abhaysu9@gmail.com","123")
    console.log(chai); // {email : "abhaysu9@gmail.com",password : "123"}
    