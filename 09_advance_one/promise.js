const promise1 = new Promise(function (resolve,reject) {
    // Do an async task
    // DB calls, Cryptography , network call
    setTimeout(function () {
        console.log("task is completed");
        resolve();
      },1000)
  })

  promise1.then(function () {
    console.log("promise is consumed");
    })

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task 2 is completed");
        resolve();
    },1000)
}).then(function () {
    console.log("Async 2 is resolved");
  })

const promise3 = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve({username : "Abhay Sundriyal" , email : "abhaysu9@gmail.com"})
    },1000)
  })
  promise3.then(function (user) {
    console.log(user);
    })

const promise4 = new promise(function (resolve,reject) {
    setTimeout(()=>{
        let error = 'true';
        if(error =! 'true'){
            resolve({username : "Abhay Sundriyal" , email : "abhaysu9@gmail.com"})
        } else{
            reject('Error ! Something went wrong')
        }
    },1000)
  })

  promise4
  .then((user)=>{
    console.log(user);
    return user.username;
  })
  .then((username)=>{
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(()=> console.log("The promise is either reslved or rejected "))

  const promise5 = new promise(function () {
    setTimeout(()=>{
        let error = 'true';
        if(error =! 'true'){
            resolve({username : "Abhay Sundriyal" , email : "abhaysu9@gmail.com"})
        } else{
            reject('Error ! Something went wrong')
        }
    },1000)
  });

  async function consumepromise5() {
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
  }
  consumepromise5()

  async function getallusers() {
    try {
        const response = await fetch('https://api.github.com/users/AbhaySundriyal') 
        const data = await response.json()
        console.log(data);
         
    } catch (error) {
        console.log("Error :",error);
    }
  }
  getallusers()

  fetch('https://api.github.com/users/AbhaySundriyal')
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((error)=>{
    console.log(error);
  })