const cards = document.querySelectorAll(".card-box");
const remainingAttemptsSpan = document.querySelector("#attempts");

let remainingAttempts = 20;
let temporarilyFlipped = [];
let canFlipCards = true;

const checkChosenCards = (card1, card2) => {
    canFlipCards = false;

    if (!card1.isEqualNode(card2)) {
        setTimeout(() => {
            toggleFlip(card1);
            toggleFlip(card2);

            canFlipCards = true;
        }, 1080);
    } else {
        canFlipCards = true;
    }
}

const toggleFlip = (card) => {
    card.classList.toggle('flip');
}

const handleAttempt = (card) => {
    if (canFlipCards && remainingAttempts > 0) {
        if (!card.classList.contains("flip")) {
            toggleFlip(card);
            temporarilyFlipped.push(card);
        }

        if (temporarilyFlipped.length == 2) {
            checkChosenCards(temporarilyFlipped[0], temporarilyFlipped[1]);
            temporarilyFlipped = [];
            remainingAttemptsSpan.innerHTML = --remainingAttempts;
        }
    }
}

const startGame = () => {
    remainingAttemptsSpan.innerHTML = remainingAttempts;

    // Detect click on cards
    cards.forEach(card => {
        card.addEventListener("click", () => {
            handleAttempt(card);
        }, false)
    });
}

window.onload = () => {
    generateCards();
    startGame();
}