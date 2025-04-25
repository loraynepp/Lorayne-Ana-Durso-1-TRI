let randomNumber = 
Math . floor(Math.random () * 10) +1;
let attempts = 0;

function checkGuess (){
    const userGuess = parseInt(document.getElementById(`guess`).value);
    attempts++;
}