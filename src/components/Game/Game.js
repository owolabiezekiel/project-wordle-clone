import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
function Game() {
  const [guessList, setGuessList] = useState([]);
  const [gameStatus, setGameStatus] = useState('running');

  function updateGuessList(guess) {
    const newGuess = {
      guess: guess,
      id: crypto.randomUUID(),
    };
    const nextGuesses = [...guessList, newGuess];
    setGuessList(nextGuesses);

    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }
  return( 
    <>
      <GuessResults guesses={guessList} answer={answer}/>
      <GuessInput gameStatus={gameStatus} updateGuessList={updateGuessList}/>
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guessList.length} />
      )}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
    
  );
}

export default Game;
