// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
let url = "https://cdn.glitch.global/a696faa2-4fc3-4f6d-a6b5-f315410a1ac8/cardjoe";
// Array containing image URLs
let cards = [
    "7.jpg?v=1710260430111", "2.jpg?v=1710260382861", "8.jpg?v=1710260438357", "3.jpg?v=1710260395085 ", "4.jpg?v=1710260403915", "6.jpg?v=1710260422880 ", "9.jpg?v=1710260712574", "5.jpg?v=1710260415882 "


];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
        let audio = document.querySelector(".audio");
    audio.play();
    }
};


buttonDouble.onclick = function() {
let audiop = document.querySelector(".audiop");
    audiop.play();
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image: url(" + url + card + ")' class='card'>");
        }
    }

};

// Button to Shuffle Cards
buttonShuffle.onclick = function() {

    shuffle(cards);
    game.innerHTML = "";
    let i = 0;
    console.log("I'm Shuffling the cards");
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' id="+i+" class='card' >");
        i = i +1;
    }

};

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Button to Flip All Cards
buttonFlip.onclick = function () {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
};

// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});