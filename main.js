const inputElement = document.getElementById('inputWord');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener("click", function () {
    const inputValue = inputElement.value;
    
    if (wordChecker(inputValue)) {
        console.log("È un palindromo!");
    } else {
        console.log("Non è un palindromo.");
    }
});

function wordChecker(word) {
    const reversedWord = word.split('').reverse().join('');

    return word === reversedWord;
}
