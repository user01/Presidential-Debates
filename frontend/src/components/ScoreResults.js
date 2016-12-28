import React, {PropTypes} from 'react';
import R from 'ramda';

const percentize = (num,den) => {
  if (den == 0) {
    return '0%';
  }
  return (Math.round((num / den) * 1000) / 10) + '%';
}

const ScoreResults = ({results}) => {
  console.log(results);

  const guessElms = R.filter(R.pipe(
    R.propEq('guess', 'none'),
    R.not
  ))(results);


  const correctHumanGuesses = R.pipe(
    R.filter((elm) => elm.Speaker == elm.guess)
  )(guessElms);
  const correctComputerGuesses = R.filter(R.prop('CorrectPrediction'))(guessElms);

  return (
    <div>
      <p>Your Score {correctHumanGuesses.length}/{guessElms.length}</p>
      <p>Your Score {percentize(correctHumanGuesses.length, guessElms.length)}</p>
      <p>Computer Score {correctComputerGuesses.length}/{guessElms.length}</p>
      <p>Computer Score {percentize(correctComputerGuesses.length, guessElms.length)}</p>
    </div>
  );
};

// Note that this odd style is utilized for propType validation for now. Must be defined *after*
// the component is defined, which is why it's separate and down here.
ScoreResults.propTypes = {
  results: PropTypes.array.isRequired
};

export default ScoreResults;
