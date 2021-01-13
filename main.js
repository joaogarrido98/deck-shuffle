window.addEventListener("load", (event) => {
    let suits = ["spades", "hearts", "clubs", "diamonds"];
    let cards = ["A", "K", "Q", "J", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let deck = new Array();

    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < cards.length; x++) {
            let card = { Value: cards[x], Suit: suits[i] }
            deck.push(card);
        }
    }
    shuffle(deck);
    renderDeck(deck);

    document.querySelector(".shuffle").addEventListener("click", (event) =>{
        shuffle(deck);
        renderDeck(deck);
    });
});


function shuffle(deck) {
    for (let i = 0; i < 1000; i++) {
        let local1 = Math.floor((Math.random() * deck.length));
        let local2 = Math.floor((Math.random() * deck.length));
        let changePlace = deck[local1];
        deck[local1] = deck[local2];
        deck[local2] = changePlace;
    }
}

function renderDeck(deck) {
    document.getElementById("deck").innerHTML = "";

    for (let i = 0; i < deck.length; i++) {
        let card = document.createElement("div");
        let value = document.createElement("div");
        let suit = document.createElement("div");
        card.className = "card " + deck[i].Suit;
        value.className = "value";
        suit.className = "suit" ;

        value.innerHTML = deck[i].Value;
        card.appendChild(value);
        card.appendChild(suit);
        document.getElementById("deck").appendChild(card);
    }

}