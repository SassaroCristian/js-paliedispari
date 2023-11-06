// costanti per ottenere gli elementi HTML
const btnPari = document.getElementById('btnPari');
const btnDispari = document.getElementById('btnDispari');
const numberInput = document.getElementById('numberInput');
const submitBtnNumber = document.getElementById('submitBtnNumber');
const resultParagraph = document.getElementById('resultParagraph');
const choiceMessage = document.getElementById('choiceMessage');
const cpuNumberMessage = document.getElementById('cpuNumberMessage');
const userAndCpuNumberSum = document.getElementById('userAndCpuNumberSum');


// variabile inizializzata in cui verrà salvata la scelta dell'utente
let userChoice = "";

// event listeners al pulsante "Pari" e "Dispari" per prendere la scelta dell'utente
btnPari.addEventListener("click", function () {
    userChoice = 'pari';
    choiceMessage.textContent = 'Hai scelto Pari';
});

btnDispari.addEventListener("click", function () {
    userChoice = 'dispari';
    choiceMessage.textContent = 'Hai scelto Dispari';
});

// funzione per generare un numero casuale per la CPU
function cpuRndNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// event listeners al pulsante di invio del numero inserito dall'utente
submitBtnNumber.addEventListener("click", function () {
    // prendiamo il numero dell'utente, il numero casuale della CPU e li sommiamo
    const userNumber = parseInt(numberInput.value);
    const cpuNumber = cpuRndNumber();
    cpuNumberMessage.textContent = 'La cpu ha scelto:  ' + cpuNumber;
    const sumOfNumbers = userNumber + cpuNumber;
    userAndCpuNumberSum.textContent = 'La somma dei numeri inseriti è: ' + sumOfNumbers;

    // Verifichiamo se la somma è pari o dispari e confrontiamo con la scelta dell'utente
    let resultMessage = "";
    if ((sumOfNumbers % 2 === 0 && userChoice === 'pari') || (sumOfNumbers % 2 !== 0 && userChoice === 'dispari')) {
        resultMessage = sumOfNumbers + ' è Pari GG ez Hai vinto! 🎊🎉🎊';
    } else {
        resultMessage = sumOfNumbers + ' è Dispari RIP boozo Hai perso! 😔😔😔';
    }

    
    resultParagraph.textContent = resultMessage;
});
