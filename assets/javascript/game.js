var wins = 0;
var lettersGuessed = [];
const totalNumGuesses = 12;
var winningWords = ['Baseball' , 'football' , 'basektball' , 'soccer'];

function refreshUI (){
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('guesses-left').innerHTML = totalNumGuesses - lettersGuessed.length;
    document.getElementById('letters').innerHTML = lettersGuessed.join(',');
}

function chooseWinningWord () {
    var randWord = winningWords[Math.floor(Math.random() * winningWords.length)];
    console.log(randWord);
};



refreshUI();
chooseWinningWord();


document.addEventListener('keyup', function (event) {
    lettersGuessed.push(event.keyCode);
    
    
    refreshUI();
});
