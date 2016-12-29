import React, {PropTypes} from 'react';
import R from 'ramda';

const LastResults = ({results}) => {

  const currentElmIndex = R.findIndex(R.propEq('guess', 'none'), results);
  const targetIndex = currentElmIndex == null ? results.length - 1 : currentElmIndex - 1;

  if (targetIndex < 0) {
    return (
      <div className="pure-g">
        <div className="pure-u-1">
          <p>Start Playing!</p>
        </div>
      </div>
    );
  }

  const lastElm = R.nth(targetIndex, results);
  console.log('Last elm', lastElm);

  return (
    <div className="pure-g">
      <div className="pure-u-1-2">
        <p>You {lastElm.guess == lastElm.Speaker ? 'Correct' : 'Incorrect'}</p>
      </div>
      <div className="pure-u-1-2">
        <p>Computer {lastElm.SpeakerPredicted == true ? 'Correct' : 'Incorrect'}</p>
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
