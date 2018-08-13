$(document).ready(function() {

  var cardSuits = ["Clubs", "Spades", "Diamonds", "Hearts"];
  var cardNumbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

  var cardListArray = [];

  cardSuits.forEach(function(suit) {
    cardNumbers.forEach(function(number) {
      var cardName = number + " of " + suit;
      cardListArray.push(cardName);
    });
  });

  cardListArray.forEach(function(card) {
    $("ul").append("<li>" + card + "</li>")
  })

  var cardGameArray = cardListArray.slice(0);

//Get two random cards and delete those cards from array to prevent duplicates
 function getCards() {
   var randomOne = Math.floor(Math.random()*cardGameArray.length);

   var cardOne = cardGameArray[randomOne];
   cardGameArray.splice(randomOne, 1);

   var randomTwo = Math.floor(Math.random()*cardGameArray.length);
   var cardTwo = cardGameArray[randomTwo];
   cardGameArray.splice(randomTwo, 1);

   alert("Card one is " + cardOne);
   alert("Card two is " + cardTwo);

   compareCards(cardOne, cardTwo);
 }

//card comparison function
 function compareCards(cardOne, cardTwo) {
   var cardOneArray = cardOne.split(" ");
   var cardTwoArray = cardTwo.split(" ");
   cardOneArray.splice(1, 1);
   cardTwoArray.splice(1, 1);

   cardOneArray[0] = convertNamesToNumber(cardOneArray[0]);
   cardTwoArray[0] = convertNamesToNumber(cardTwoArray[0]);

   cardRanks(cardOneArray[0], cardTwoArray[0]);
 }

//Converts Jacks, Queens, Kings, Aces to number value
 function convertNamesToNumber(card) {
   if (card === "Jack") {
     return 11;
   } else if (card === "Queen") {
     return 12;
   } else if (card === "King") {
     return 13;
   } else if (card === "Ace") {
     return 14;
   } else {
     return card;
   }
 }

 function cardRanks(cardOneNum, cardTwoNum) {

   var cardOne = parseInt(cardOneNum);
   var cardTwo = parseInt(cardTwoNum);

   if (cardOne > cardTwo) {
     alert("Card One Wins!");
   } else if (cardOne < cardTwo) {
     alert("Card Two Wins!");
   } else if (cardOne === cardTwo) {
     alert("Tie! Try again.");
   }
 }

 $("button#getTwoCards").click(function() {
   getCards();

 })

  // var cardGameArray = cardListArray.slice(0);
  // var randomOne = Math.floor(Math.random()*cardGameArray.length);
  //
  // var cardOne = cardGameArray[randomOne];
  // cardGameArray.splice(randomOne, 1);
  //
  // var cardTwo = cardGameArray[Math.floor(Math.random()*cardGameArray.length)];
  //
  // alert("Card one is " + cardOne);
  // alert("Card two is " + cardTwo);


})
