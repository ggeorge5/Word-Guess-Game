const words = ['string', 'method', 'function', 'variable', 'constant', 'array'];

let randNum = Math.floor(Math.random() * words.length);
let guesses = 12;
let choosenWord = words[randNum];
let underScore = []; 
let rightWord = [];
let wrongWord = [];

// Dom Manipulation

let docUnderScore = document.getElementsByClassName('underscore');



console.log(choosenWord);


function generateUnderscore() {
    for(let i=0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
};

generateUnderscore();

document.addEventListener("keypress", function (event) {
    let keyword = String.fromCharCode(event.keyCode);
    if (choosenWord.indexOf(keyword) > -1) { 

        rightWord.push(keyword);
        
        

        underScore[choosenWord.indexOf(keyword)] = keyword;

        if(underScore.join('') == choosenWord) {
            alert('You Win');
        }
        }

    else {
        
        wrongWord.push(keyword);
        }
        

    
    docUnderScore[0].innerHTML = generateUnderscore().join(' ');    

   

});



