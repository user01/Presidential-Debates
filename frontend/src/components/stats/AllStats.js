import React, {PropTypes} from 'react';
import R from 'ramda';
import Chance from 'chance';

const chance = new Chance();
const prob_display = (elm) => {
  const prob = elm.Speaker == 'clinton' ? elm.ClintonProbability : elm.TrumpProbability;
  return Math.round(prob * 100) + '%';
}

const AllStats = ({results}) => {

  const elms = R.pipe(
    R.addIndex(R.map)((elm, idx) => {
      if (elm.guess == 'none') return false;

      const text_sample = elm.Text.length > 50 ? elm.Text.substring(0,50) + '…' : elm.Text;

      return (
        <tr key={idx}>
          <td>{chance.capitalize(elm.guess)}</td>
          <td>{chance.capitalize(elm.Speaker)}</td>
          <td>{chance.capitalize(elm.SpeakerPredicted)}</td>
          <td>{prob_display(elm)}</td>
          <td>{text_sample}</td>
        </tr>
      );
    }),
    R.filter(R.pipe(R.equals(false), R.not))
  )(results);
  console.log(results);

  const closer = elms.length == results.length ? '' : (<p className="center">And {results.length - elms.length} lines remain untested.</p>);

  return (
    <div className="pure-g panel">
      <div className="pure-u-1">
        <table className="pure-table pure-table-striped">
          <thead>
            <tr>
              <th>You</th>
              <th>Actual</th>
              <th>Computer</th>
              <th>Text</th>
            </tr>
          </thead>

          <tbody>
            {elms}
          </tbody>
        </table>
        {closer}
      </div>
    </div>
  );
};

// Note that this odd style is utilized for propType validation for now. Must be defined *after*
// the component is defined, which is why it's separate and down here.
AllStats.propTypes = {
  results: PropTypes.array.isRequired
};

export default AllStats;
