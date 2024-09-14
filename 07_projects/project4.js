let randomnumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessfield');
const guessslot = document.querySelector('#guesses');
const remaining = document.querySelector('#lastresult');
const loworhi = document.querySelector('#loworhi');
const startover = document.querySelector('#resultparas');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let playgame = true;

if (playgame){
    submit.addEventListener('click',function (e) {
        e.preventDefault();
       const guess  =  parseInt(userinput.value);
        validateguess(guess)
      });
}
function validateguess(guess){
    if (isNaN(guess)) {
        alert('please enter a valid number');
    }else if(guess < 1){
        alert('please enter valid number');
    }
    else if (guess > 100) {
        alert('please enter a valid number');
    } else{
        prevguess.push(guess);
        if (numguess === 11) {
            displayguess(guess);
            displaymessage('Game Over,randomnumber was',randomnumber );
            endgame();
        } else{
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess){
    if (guess === randomnumber){
        displaymessage('your guess it right');
        endgame();
    } else if (guess < randomnumber){
        displaymessage('number is too low');
    } else if (guess > randomnumber){
        displaymessage('number is too high');
    }
}

function displayguess (guess) {
    userinput.value = '';
    guessslot.innerHTML += guess ;
    numguess++;
    remaining.innerHTML = 11 - numguess ;
  }

function displaymessage(message){
    loworhi.innerHTML = message;
}

function newgame (){
    const newgamebutton = document.querySelector('#newgame');
    newgamebutton.addEventListener('click',function (e) {
        randomnumber = parseInt(Math.random()*100+1);
        prevguess = [];
        numguess = 1;
        guessslot.innerHTML = '';
        remaining.innerHTML = (11 - numguess);
        userinput.removeAttribute('disabled');
        startover.removeChild(p);
        playgame = true;
        
      })
}

function endgame () {
    userinput.value = '';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = 'start neew game';
    startover.appendChild(p);
    playgame = false;
    newgame();
  }
