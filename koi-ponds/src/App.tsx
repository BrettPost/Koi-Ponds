import React from 'react';
import Card from './Components/Card/Card';
import typeCard from './Utility/Card';
import FaceDownCard from './Components/Card/FaceDownCard';
import DiscardPile from './Components/Card/DiscardPile';
import './App.css';

var tradeDeck: typeCard[] = [];
var tradeRow: typeCard[] = [];
var scrapHeap: typeCard[] = [];

var opponentBases: typeCard[] = [];
var opponentDeck: typeCard[] = [];
var opponentDiscard: typeCard[] = [];
var opponentHand: typeCard[] = [];

var myBases: typeCard[] = [];
var myDeck: typeCard[] = [];
var myDiscard: typeCard[] = [];
var myHand: typeCard[] = [];

var scout = {name: "Scout", image: "", primaryAbility: "2 trade"};
var viper = {name: "Viper", image: "", primaryAbility: "2 Combat"};

function newGame() {
  for(var i = 0; i < 8; i++) {
    myDeck.push(scout);
    opponentDeck.push(scout);
  }
  for(i = 0; i < 2; i++) {
    myDeck.push(viper);
    opponentDeck.push(viper);
  }
  shuffleDeck(myDeck);
  shuffleDeck(opponentDeck);
}

function shuffleDeck(deck: typeCard[]) {
  let newDeck: typeCard[] = deck;

  for(var i = 0; i < newDeck.length; i++) {
    let randIndex = Math.floor(Math.random() * (i + 1) );
    var temp = newDeck[i];
    newDeck[i] = newDeck[randIndex];
    newDeck[randIndex] = temp;
  }
  return newDeck;
}

function isPileEmpty(deck: typeCard[], isDiscard: boolean) {
  var scrapCard: typeCard = {
    name: "Error Card",
    image: "",
    primaryAbility: "",
  }

  if (deck.length === 0) {                            //Any Pile has no cards
    return <DiscardPile />
  } else if (isDiscard) {                             // Discard Pile has cards
    try {
      scrapCard = {...deck[deck.length - 1]!};
    } catch (err) {
      console.log(err)
    }
    return <Card info={scrapCard} />
  } else {                                            // Regular Deck has cards
    return <FaceDownCard position='trade-deck' />
  }
}

function moveCard(sourceDeck: typeCard[], targetPile: typeCard[]): typeCard {
  var selectedCard: typeCard = {
    name: "Error Card",
    image: "",
    primaryAbility: "",
  }

  // push card to new location
  try {
    selectedCard = {...sourceDeck.pop()!};
    targetPile.push(selectedCard);
  } catch (err) {
    console.log(err)
  }
  
  return selectedCard;
}

function App() {
  return (
    <div className="App bg-green-700">
      <button type="submit" onClick={() => newGame()}>New game</button>
      <div className='grid grid-cols-9 grid-rows-5'>

        {/* OpponentDiscard */}
        <div className='col-start-1 col-span-1'>
          {isPileEmpty(opponentDiscard, true)}
        </div>
        {/* OpponentDeck */}
        <div className='col-start-2 col-span-1'>
          {isPileEmpty(opponentDeck, false)}
        </div>
        {/* OpponentHand */}
        <div className='col-start-3 col-span-5 flex'>
          {opponentHand.map((card) => <Card info={card}/>)}
        </div>
        {/* OpponentBases */}
        <div className='col-start-8 col-span-2 row-span-2 flex'>
          {opponentBases.map((base) => <Card info={base}/>)}
        </div>

        {/* Scrap Heap */}
        <div className='col-start-1 row-start-3 col-span-1 '>
          {isPileEmpty(scrapHeap, true)}
        </div>
        {/* Trade Deck */}
        <div className='col-start-2 row-start-3 col-span-1 '>
          {isPileEmpty(tradeDeck, false)}
        </div>
        {/* Trade Row */}
        <div className='col-start-3 row-start-3 col-span-5 flex'>
          {tradeRow.map((card) => <Card info={card}/>)}
        </div>
        {/* Explorers */}
        <div className='col-start-8 row-start-3 col-span-1 '>
          <Card info={{name: "Explorer", image: "", primaryAbility: "2 trade"}}/>
        </div>
        
        
        {/* MyBases */}
        <div className='col-start-1 row-start-4 col-span-2 row-span-2 flex'>

        </div>
        {/* MyHand */}
        <div className='col-start-3 row-start-5 col-span-5 flex'>
          {myHand.map((card) => <Card info={card}/>)}
        </div>
        {/* MyDeck */}
        <div className='col-start-8 row-start-5 col-span-1'>
          {isPileEmpty(myDeck, false)}
        </div>
        {/* MyDiscard */}
        <div className='col-start-9 row-start-5 col-span-1'>
          {isPileEmpty(myDiscard, true)}
        </div>
      </div>
    </div>
  );
}

export default App;
