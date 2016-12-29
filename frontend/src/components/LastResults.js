import React, {PropTypes} from 'react';
import R from 'ramda';

const percentize = (num,den) => {
  if (den == 0) {
    return '??%';
  }
  return Math.round(num / den * 100) + '%';
}

const LastResults = ({results}) => {

  const currentElmIndex = R.findIndex(R.propEq('guess', 'none'), results);
  const targetIndex = currentElmIndex == null ? results.length - 1 : currentElmIndex - 1;

  if (targetIndex < 0) {
    return (
      <div className="pure-g">
        <div className="pure-u-1 center">
          <p>Start Playing!</p>
        </div>
      </div>
    );
  }

  const lastElm = R.nth(targetIndex, results);
  console.log('Last elm', lastElm);

  const guessElms = R.filter(R.pipe(
    R.propEq('guess', 'none'),
    R.not
  ))(results);

  const correctHumanGuesses = R.pipe(
    R.filter((elm) => elm.Speaker == elm.guess)
  )(guessElms);
  const correctComputerGuesses = R.filter(R.prop('CorrectPrediction'))(guessElms);


  return (
    <div className="pure-g">
      <div className="pure-u-1-2">
        <p>Human
        &nbsp;
        {percentize(correctHumanGuesses.length, guessElms.length)}
        &nbsp;
        {lastElm.guess == lastElm.Speaker ? <i className="fa fa-arrow-up postive" aria-hidden="true"></i> : <i className="fa fa-arrow-down negative" aria-hidden="true"></i>}
        </p>
      </div>
      <div className="pure-u-1-2">
        <p>Computer
        &nbsp;
        {percentize(correctComputerGuesses.length, guessElms.length)}
        &nbsp;
        {lastElm.CorrectPrediction == true ? <i className="fa fa-arrow-up postive" aria-hidden="true"></i> : <i className="fa fa-arrow-down negative" aria-hidden="true"></i>}
        </p>
      </div>
    </div>
  );
};

// Note that this odd style is utilized for propType validation for now. Must be defined *after*
// the component is defined, which is why it's separate and down here.
LastResults.propTypes = {
  results: PropTypes.array.isRequired
};

export default LastResults;
