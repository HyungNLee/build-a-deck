$(document).ready(function() {

  var cardSuits = ["Clubs", "Spades", "Diamonds", "Hearts"];
  var cardNumbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

  var cardListArray = [];

  cardSuits.forEach(function(suit) {
    cardNumbers.forEach(function(number) {
      var cardName = number + " of " + suit;
      cardListArray.push(cardName);
      // $("ul").append("<li>" + cardName + "</li>")
    });
  });

  // cardListArray.reverse();

  cardListArray.forEach(function(card) {
    $("ul").append("<li>" + card + "</li>")
  })
})
