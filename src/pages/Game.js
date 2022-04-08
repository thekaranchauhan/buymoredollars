import { useEffect, useState } from 'react';
import '../components/style/Game.css';
import SingleCard from '../components/SingleCard';
import { useNavigate } from 'react-router-dom';
import { useTimer } from "reactjs-countdown-hook";


// array of card images
const cardImages = [
   { "src": "/img/image1.png", matched: false },
   { "src": "/img/image2.png", matched: false },
   { "src": "/img/image3.png", matched: false },
   { "src": "/img/image4.png", matched: false },
   { "src": "/img/image5.png", matched: false },
]

function Game() {
   const navigate = useNavigate();
   const [cards, setCards] = useState([]);
   const [turns, setTurns] = useState(0);
   const [PickOne, setPickOne] = useState(null);
   const [PickTwo, setPickTwo] = useState(null);
   const [disabled, setDisabled] = useState(false);
   const [hasWon, setHasWon] = useState(false);

   const handleTimerFinish = () => { };
   const {
      //   if the timer is not active then we dont let the victory function invoke
      isActive,
      seconds,
   } = useTimer(20, handleTimerFinish);

   // Mapping cards and if user plays after 48 hours the cards will be reset
   const shuffleCards = () => {
      const shuffledCards = [...cardImages, ...cardImages] // 2 lots of card images
         .sort(() => Math.random() - 0.5) // shuffled array
         .map((card) => ({ ...card, id: Math.random() })); // add on random ID number to each card

      setPickOne(null);
      setPickTwo(null);
      setCards(shuffledCards);
      setTurns(0);
   };

   // handle a user Pick, update Pick one or two
   const handlePick = (card) => {
      PickOne ? setPickTwo(card) : setPickOne(card); // if PickOne is null (is false), update with setPickOne, else update PickTwo with setPickTwo
   };
   useEffect(() => {
      shuffleCards();
   }, []);

   // compare two selected cards
   useEffect(() => {
      if (PickOne && PickTwo) {
         setDisabled(true);
         if (PickOne.src === PickTwo.src) {
            setCards((prevCards) => {
               return prevCards.map((card) => {
                  if (card.src === PickOne.src) {
                     return { ...card, matched: true };
                  } else {
                     return card;
                  }
               });
            });
            resetTurn();
         } else {
            setTimeout(() => resetTurn(), 1000);
         }
      }
   }, [PickOne, PickTwo]);

   // Check if use has won on picktwo
   useEffect(() => {
      //   On pick two if any card is not matched then we set victory state to false and if all are true then victory state to true

      let matched = cards.map((card) => card.matched);
      if (matched.length >= 2) {
         if (matched.every((element) => element === true)) {
            setHasWon(true);
         }
      }
   }, [PickTwo, PickOne]);

   useEffect(() => {
      if (hasWon === true) navigate("/Win");
      if (isActive === false) {
         navigate("/lose");
      }
   }, [isActive, hasWon]);

   // reset Picks and increase number of turns
   const resetTurn = () => {
      setPickOne(null);
      setPickTwo(null);
      setTurns((prevTurns) => prevTurns + 1);
      setDisabled(false);
   };

   return (
      <div className="game">
         <p>Turns: {turns}</p>
         <div>
            <h1>{seconds}</h1>
         </div>
         <div className="card-grid">
            {cards.map((card) => (
               <SingleCard
                  key={card.id}
                  card={card}
                  handlePick={handlePick}
                  cardFlipped={card === PickOne || card === PickTwo || card.matched}
                  disabled={disabled}
               />
            ))}
         </div>
      </div>
   );
}

export default Game;