const cards = document.querySelectorAll(".card-box");

const toggleFlip = (card) => {
    if (!card.classList.contains("flip")) {
        card.classList.toggle('flip');
    }
}

cards.forEach(card => {
    card.addEventListener("click", () => {
        toggleFlip(card);
    }, false)
});