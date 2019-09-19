var wins = 0;
var lettersGuessed = [];
const totalNumGuesses = 12;
var winningWords = ['Baseball' , 'football' , 'basektball' , 'soccer'];
var underScore = [];

function refreshUI (){
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('guesses-left').innerHTML = totalNumGuesses - lettersGuessed.length;
    document.getElementById('letters').innerHTML = lettersGuessed.join('');
}

function chooseWinningWord () {
    var randWord = winningWords[Math.floor(Math.random() * winningWords.length)];
    console.log(randWord);
};

function generateUnderscore () {
    for (var i = 0; i < winningWords.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore());
refreshUI();
chooseWinningWord();


document.addEventListener('keypress', function (event) {
    let keycode = event.keyCode;
    let keyword = String.fromCharCode(keycode);
    if (randWord.indexOf(keyword) > - 1){
        console.log(true);
    }    
    refreshUI();
});
