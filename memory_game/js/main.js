console.log("Up and running!");



var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

cardOne = cards[0];
cardsInPlay.push(cardOne);

cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again");
	}
}
else {

}