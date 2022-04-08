import React from 'react'
import './style/MatchingGame.css'
import Game from './Game'
import { useNavigate } from 'react-router-dom';


const MatchingGame = () => {

   const navigate = useNavigate();

   function handleClick() {
      navigate('/Game');
   }
    return (
       <>
         <section className='game-intro'>
            <div className='gameHeading'>
               <h1>
                  Play and win prizes up to
                  $10,000 Buy More Dollars
               </h1>

               {/* Play Now Button */}
               <button className='play-btn'><a href='#game'>Play Now</a></button>
            </div>
         </section>

         <section className="play">
            <h1>How to play ?</h1>
            <div className="rules">
                <p>
                    -The game consists of 10 cards; you must
                    make all five matches to win the game.
                </p>
                <p>
                    -The objective of the game is to match the
                    fimages with the similar one.
                </p>
                <p>
                    -You will have 20 seconds to make all 5
                    matches.
                </p>
            </div>
         </section>
         <article className='buttons'>
            <button className='startBtn' onClick={handleClick}>Start Game</button>
         </article>
       </>
        
    )
}

export default MatchingGame;