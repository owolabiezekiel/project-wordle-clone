import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);

  function updateGuessList(guess) {
    const newGuess = {
      guess: guess,
      id: crypto.randomUUID(),
    };
    const nextGuesses = [...guessList, newGuess];
    setGuessList(nextGuesses);
  }
  return( 
    <>
    <GuessResults guesses={guessList} />
    <GuessInput updateGuessList={updateGuessList}/></>
  );
}

export default Game;
