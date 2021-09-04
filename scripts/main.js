const cards = document.querySelectorAll(".card-box");
const remainingAttemptsSpan = document.querySelector("#attempts");

let remainingAttempts = 20;
let temporarilyFlipped = [];
let canFlipCards = true;

const toggleFlip = (card) => {
    card.classList.toggle('flip');
}

const toggleMatchBorder = (card1, card2, className) => {
    [card1, card2].forEach(card => {
        card.querySelector(".visible-card").classList.toggle(className);
    });
}

const checkChosenCards = (card1, card2) => {
    canFlipCards = false;

    if (!card1.isEqualNode(card2)) {
        toggleMatchBorder(card1, card2, "mismatch")

        setTimeout(() => {
            toggleFlip(card1);
            toggleFlip(card2);

            toggleMatchBorder(card1, card2, "mismatch");

            canFlipCards = true;
        }, 1080);
    } else {
        toggleMatchBorder(card1, card2, "match");
        canFlipCards = true;
    }
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

const showCards = () => {
    setTimeout(() => {
        cards.forEach(card => {
            toggleFlip(card);
        });
    }, 400);
}

const hideCards = () => {
    setTimeout(() => {
        cards.forEach(card => {
            toggleFlip(card);
        });
    }, 1500);
}

const startClickDetection = () => {
    setTimeout(() => {
        cards.forEach(card => {
            card.addEventListener("click", () => {
                handleAttempt(card);
            }, false)
        });
    }, 1600);
}

const startGame = () => {
    remainingAttemptsSpan.innerHTML = remainingAttempts;

    showCards();
    hideCards();

    startClickDetection();
}

window.onload = () => {
    generateCards();
    startGame();
}