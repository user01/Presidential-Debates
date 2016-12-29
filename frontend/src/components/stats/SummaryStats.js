import React, {PropTypes} from 'react';
import R from 'ramda';
import TitleCard from './TitleCard.jsx';


const percentize = (num,den) => {
  if (den == 0) {
    return '??%';
  }
  return Math.round(num / den * 100) + '%';
};


const SummaryStats = ({results}) => {

  const clintonLines = R.filter(R.propEq('Speaker','clinton'), results);

  const guessedLines = R.filter(R.pipe(R.propEq('guess','none'),R.not), results);
  const guessLinesCorrect = R.filter((elm)=>{
    return elm.guess == elm.Speaker;
  }, guessedLines);

  const guessedLinesTrump = R.filter(R.propEq('Speaker','trump'), guessedLines);
  const guessTrumpCorrect = R.filter((elm)=>{
    return elm.guess == elm.Speaker;
  }, guessedLinesTrump);

  const guessedLinesClinton = R.filter(R.propEq('Speaker','clinton'), guessedLines);
  const guessClintonCorrect = R.filter((elm)=>{
    return elm.guess == elm.Speaker;
  }, guessedLinesClinton);

  const computerLinesCorrect = R.filter((elm)=>{
    return elm.CorrectPrediction;
  }, guessedLines);
  const computerTrumpCorrect = R.filter((elm)=>{
    return elm.CorrectPrediction;
  }, guessedLinesTrump);

  const computerClintonCorrect = R.filter((elm)=>{
    return elm.CorrectPrediction;
  }, guessedLinesClinton);


  return (
    <div className="pure-g">
      <div className="pure-u-1">
        <div className="pure-g">
          <div className="pure-u-1">
            <TitleCard humanCorrect={guessLinesCorrect.length} computerCorrect={computerLinesCorrect.length} />
            <p>The <a target="_blank" href="https://en.wikipedia.org/wiki/United_States_presidential_debates,_2016#Third_presidential_debate_.28University_of_Nevada.2C_Las_Vegas.29">
              third presidental debate</a> consisted of {results.length} spoken lines.
            Hillary Clinton spoke {clintonLines.length} lines, {percentize(clintonLines.length, results.length)} of the total.
            Donald Trump spoke {results.length - clintonLines.length} lines, {percentize(results.length - clintonLines.length, results.length)} of the total.</p>
          </div>
        </div>
        <div className="pure-g panel">
          <div className="pure-u-1-3 person-color">
            <h3 className="center">You</h3>
            <h3 className="center"><i className="fa fa-user" aria-hidden="true"></i></h3>
          </div>
          <div className="pure-u-2-3">
            <h3>Accuracy: {percentize(guessLinesCorrect.length, guessedLines.length)}</h3>
            <p>For Trump ({guessedLinesTrump.length} lines), you were right {percentize(guessTrumpCorrect.length, guessedLinesTrump.length)} of the time.</p>
            <p>For Clinton ({guessedLinesClinton.length} lines), you were right {percentize(guessClintonCorrect.length, guessedLinesClinton.length)} of the time.</p>
          </div>
        </div>
        <div className="pure-g panel">
          <div className="pure-u-1-3 computer-color">
            <h3 className="center">Computer</h3>
            <h3 className="center"><i className="fa fa-cogs" aria-hidden="true"></i></h3>
          </div>
          <div className="pure-u-2-3">
            <h3>Accuracy: {percentize(computerLinesCorrect.length, guessedLines.length)}</h3>
            <p>For Trump ({guessedLinesTrump.length} lines), it was right {percentize(computerTrumpCorrect.length, guessedLinesTrump.length)} of the time.</p>
            <p>For Clinton ({guessedLinesClinton.length} lines), it was right {percentize(computerClintonCorrect.length, guessedLinesClinton.length)} of the time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Note that this odd style is utilized for propType validation for now. Must be defined *after*
// the component is defined, which is why it's separate and down here.
SummaryStats.propTypes = {
  results: PropTypes.array.isRequired
};

export default SummaryStats;
