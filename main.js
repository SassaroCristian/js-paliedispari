const inputElement = document.getElementById('inputWord');
const submitBtn = document.getElementById('submitBtn');
const resultWord = document.getElementById('resultWord')

submitBtn.addEventListener("click", function () {
    const inputValue = inputElement.value;
    
    if (wordChecker(inputValue)) {
        resultWord.textContent = "È un palindromo!";
    } else {
        console.log("Non è un palindromo.");
        resultWord.textContent = "Non è un palindromo!";
    }
});

function wordChecker(word) {
    const reversedWord = word.split('').reverse().join('');

    return word === reversedWord;
}
