import React, {PropTypes} from 'react';
import R from 'ramda';
import Chance from 'chance';

const chance = new Chance();
const prob_display = (elm) => {
  const prob = elm.Speaker == 'clinton' ? elm.ClintonProbability : elm.TrumpProbability;
  return Math.round(prob * 100) + '%';
}
const markResult = (result) => {
  return result ?
      (<i className="fa fa-check postive" aria-hidden="true"></i>) :
      (<i className="fa fa-times negative" aria-hidden="true"></i>);
}

const AllStats = ({results}) => {

  const elms = R.pipe(
    R.addIndex(R.map)((elm, idx) => {
      if (elm.guess == 'none') return false;

      const text_sample = elm.Text.length > 50 ? elm.Text.substring(0,50) + '…' : elm.Text;

      return (
        <tr key={idx}>
          <td><p className="table-line">{chance.capitalize(elm.guess)}</p></td>
          <td><p className="table-line center">{markResult(elm.guess == elm.Speaker)}</p></td>
          <td><p className="table-line center">{markResult(elm.CorrectPrediction)}</p></td>
          <td><p className="table-line center">{prob_display(elm)}</p></td>

        </tr>
      );
    }),
    R.filter(R.pipe(R.equals(false), R.not))
  )(results);
  console.log(results);

  const closer = elms.length == results.length ? '' : (<p className="center">And {results.length - elms.length} lines remain untested.</p>);

  return (
    <div className="pure-g">
      <div className="pure-u-1">
        <table className="pure-table pure-table-striped stretch">
          <thead>
            <tr>
              <th><p className="center">Speaker</p></th>
              <th><p className="center"><i className="fa fa-user" aria-hidden="true"></i></p></th>
              <th><p className="center"><i className="fa fa-cogs" aria-hidden="true"></i></p></th>
              <th><p className="center"><i className="fa fa-percent" aria-hidden="true"></i></p></th>

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
