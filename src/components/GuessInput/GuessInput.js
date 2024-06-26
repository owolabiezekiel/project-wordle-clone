import React, { useState } from 'react';

function GuessInput({gameStatus, updateGuessList}) {
  const [guess, setGuess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adding some redundancy checks to ensure guess is 5 characters long in case browser validation fails
    if (guess.length !== 5) {
      alert('Guess must be 5 characters long');
      return;
    }
    updateGuessList(guess);
    setGuess('');
  };

  const handleChange = (event) => {
    const upperCaseGuess = event.target.value.toUpperCase(); // Convert input to uppercase
    setGuess(upperCaseGuess);
  };

  return(
    <div>
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
          <label htmlFor="guess-input">Enter guess:</label>
          <input
            required
            disabled={gameStatus !== 'running'}
            minLength={5}
            maxLength={5}
            pattern="[a-zA-Z]{5}"
            title="5 letter word required"
            id="guess-input" 
            type="text" 
            value={guess}
            onChange={handleChange}
          />
        </form>
      </div>
  );
}

export default GuessInput;
