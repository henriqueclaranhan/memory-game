let imageCards = [
    "c",
    "css3",
    "git",
    "html5",
    "java",
    "javascript",
    "php",
    "python",
    "ubuntu",
    "windows"
]

const randomize = (arr) => {
    return arr.concat(arr).sort(() => .5 - Math.random());
}

const createImageCard = (card) => {
    return `<div class="card visible-card">
                <img class="icon" src="./assets/images/${card}.svg" alt="${card} icon">
            </div>`
}

const generateCards = () => {
    imageCards = randomize(imageCards);

    for (let x = 0; x < 20; x++) {
        cards[x].innerHTML += createImageCard(imageCards[x]);
    }
}