import React from 'react';
import Card from './Components/Card/Card';
import FaceDownCard from './Components/Card/FaceDownCard';
import DiscardPile from './Components/Card/DiscardPile';
import './App.css';

interface Explorers {
  name: "Explorer";

}

var tradeDeck = [];
var tradeRow = [];
var scrapHeap = [];

var opponentBases = [];
var opponentDeck = [];
var opponentDiscard = [];
var opponentHand = [];

var myBases = [];
var myDeck = [];
var myDiscard = [];
var myHand = [];


function App() {
  return (
    <div className="App bg-green-700">
      <div className='grid grid-cols-9 grid-rows-5'>

        {/* OpponentDiscard */}
        <div className='col-start-1 col-span-1'>
          <DiscardPile />
        </div>
        {/* OpponentDeck */}
        <div className='col-start-2 col-span-1'>
          <FaceDownCard position='trade-deck' />
        </div>
        {/* OpponentHand */}
        <div className='col-start-3 col-span-5 flex'>
          <Card type="ship" position="trade-deck"/>
          <Card type="ship" position="trade-deck"/>
          <Card type="ship" position="trade-deck"/>
          <Card type="ship" position="trade-deck"/>
          <Card type="ship" position="trade-deck"/>
        </div>
        {/* OpponentBases */}
        <div className='col-start-8 col-span-2 row-span-2 flex'>

        </div>

        {/* Scrap Heap */}
        <div className='col-start-1 row-start-3 col-span-1 '>
          <DiscardPile />
        </div>
        {/* Trade Deck */}
        <div className='col-start-2 row-start-3 col-span-1 '>
          <FaceDownCard position='trade-deck' />
        </div>
        {/* Trade Row */}
        <div className='col-start-3 row-start-3 col-span-5 flex'>
          <Card type="ship" position="trade-deck"/>
          <Card type="ship" position="trade-deck"/>
          <Card type="ship" position="trade-deck"/>
          <Card type="ship" position="trade-deck"/>
          <Card type="ship" position="trade-deck"/>
        </div>
        {/* Explorers */}
        <div className='col-start-8 row-start-3 col-span-1 '>
          <Card type="explorer" position="explorer" />
        </div>
        
        
        {/* MyBases */}
        <div className='col-start-1 row-start-4 col-span-2 row-span-2 flex'>

        </div>
        {/* MyHand */}
        <div className='col-start-3 row-start-5 col-span-5 flex'>
          <Card type="ship" position="trade-deck"/>
          <Card type="ship" position="trade-deck"/>
          <Card type="ship" position="trade-deck"/>
          <Card type="ship" position="trade-deck"/>
          <Card type="ship" position="trade-deck"/>
        </div>
        {/* MyDeck */}
        <div className='col-start-8 row-start-5 col-span-1'>
          <FaceDownCard position='trade-deck' />
        </div>
        {/* MyDiscard */}
        <div className='col-start-9 row-start-5 col-span-1'>
          <DiscardPile />
        </div>
      </div>
    </div>
  );
}

export default App;
