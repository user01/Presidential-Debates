import React, {PropTypes} from 'react';
import R from 'ramda';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const percentify = (num, den) => {
  if (den == 0)
    return 0;
  return Math.round(num / den * 100);
}

const AccuracyGraphComponent = ({results}) => {

  // console.log(results);
  const data_you = R.pipe(R.filter(R.pipe(R.propEq('guess', 'none'), R.not)), // Remove any non guesses
      R.mapAccum((acc, elm) => {
    const [correct,
      total] = acc;
    const isCorrect = elm.Speaker == elm.guess;
    const newCorrect = correct + (isCorrect
      ? 1
      : 0);
    const newTotal = total + 1;
    return [
      [
        newCorrect, newTotal
      ],
      percentify(newCorrect, newTotal)
    ];
  }, [0, 0]), R.nth(1), R.prepend('You'))(results);
  const data_computer = R.pipe(R.filter(R.pipe(R.propEq('guess', 'none'), R.not)), // Remove any non guesses
      R.mapAccum((acc, elm) => {
    const [correct,
      total] = acc;
    const isCorrect = elm.CorrectPrediction;
    const newCorrect = correct + (isCorrect
      ? 1
      : 0);
    const newTotal = total + 1;
    return [
      [
        newCorrect, newTotal
      ],
      percentify(newCorrect, newTotal)
    ];
  }, [0, 0]), R.nth(1), R.prepend('Computer'))(results);
  // console.log(data_computer);

  const data = {
    columns: [data_you, data_computer],
    colors: {
      'You': '#FF7F0E',
      'Computer': '#1F77B4'
    }
  };
  return (
    <div>
      <C3Chart data={data} grid={{
        y: {
          show: true
        }
      }} axis={{
        y: {
          label: {
            text: 'Accuracy',
            position: 'outer-middle'
          },
          tick: {
            format: (i) => `${i}%`
          }
        },
        x: {
          label: {
            text: 'Line',
            position: 'outer-middle'
          },
          tick: {
            format: (i) => `${i+1}`
          }
        }
      }} tooltip={{
        format: {
          title: (idx) => {
            return 'Line ' + (idx + 1);
          }
        }
      }}/>
    </div>
  );

}

AccuracyGraphComponent.propTypes = {
  results: PropTypes.array.isRequired
};

export default AccuracyGraphComponent;
