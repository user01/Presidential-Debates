import React, {PropTypes} from 'react';
import R from 'ramda';
import StatGo from './StatGo.jsx';

const percentize = (num,den) => {
  if (den == 0) {
    return '??%';
  }
  return Math.round(num / den * 100) + '%';
};

const LastResults = ({results}) => {

  const currentElmIndex = R.findIndex(R.propEq('guess', 'none'), results);
  const targetIndex = currentElmIndex == -1 ? results.length - 1 : currentElmIndex - 1;

  if (targetIndex < 0) {
    return (
      <div className="pure-g panel">
        <div className="pure-u-1 center">
          <p>Choose who spoke the line in the debate.</p>
        </div>
      </div>
    );
  }

  const lastElm = R.nth(targetIndex, results);
  // console.log('Last elm', lastElm);

  const guessElms = R.filter(R.pipe(
    R.propEq('guess', 'none'),
    R.not
  ))(results);

  const correctHumanGuesses = R.pipe(
    R.filter((elm) => elm.Speaker == elm.guess)
  )(guessElms);
  const correctComputerGuesses = R.filter(R.prop('CorrectPrediction'))(guessElms);


  return (
    <div className="pure-g panel">
      <div className="pure-u-1">
        <div className="pure-g">

          <div className="pure-u-1-24 pure-u-sm-hide"></div>
          <div className="pure-u-7-24 pure-u-sm-1-3">
            <p className="center button-padding">You
            &nbsp;
            {percentize(correctHumanGuesses.length, guessElms.length)}
            &nbsp;
            {lastElm.guess == lastElm.Speaker ? <i className="fa fa-arrow-up postive" aria-hidden="true"></i> : <i className="fa fa-arrow-down negative" aria-hidden="true"></i>}
            </p>
          </div>
          <div className="pure-u-8-24 pure-u-sm-1-3">
            <StatGo />
          </div>
          <div className="pure-u-7-24 pure-u-sm-1-3">
            <p className="center button-padding">Computer
            &nbsp;
            {percentize(correctComputerGuesses.length, guessElms.length)}
            &nbsp;
            {lastElm.CorrectPrediction == true ? <i className="fa fa-arrow-up postive" aria-hidden="true"></i> : <i className="fa fa-arrow-down negative" aria-hidden="true"></i>}
            </p>
          </div>
          <div className="pure-u-1-24 pure-u-sm-hide"></div>
        </div>
        <div className="pure-g">
          <div className="pure-u-1">

          </div>
        </div>
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
