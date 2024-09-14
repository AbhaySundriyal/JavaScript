const buttons = document.querySelectorAll(".button")
const body = document.querySelector('body');
buttons.forEach(function (button){
    console.log(button);
    
    button.addEventListener('click',function(e){
        console.log(e.target);
        if(e.target.id ==='grey'){
            body.style.backgroundColor = e.target.id; // or 'grey'
        }
        if(e.target.id ==='white'){
            body.style.backgroundColor = e.target.id; // or 'white'
        }
        if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id; // or 'yellow'
        }
        if(e.target.id ==='blue'){
            body.style.backgroundColor = e.target.id; // or 'blue'
        }
           
    });
});