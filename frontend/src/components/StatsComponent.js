import React from 'react';
import R from 'ramda';
import {
  Link
} from 'react-router';
import AllStats from './stats/AllStats.js';


class StatsComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const results = this.props.data;

    if (R.findIndex(R.propEq('guess', 'none'), results) == 0){
      return (
        <div className="pure-g panel">
          <div className="pure-u-1 center">
            <p>No data has been gathered…yet.</p>
            <p className="center">
              <Link className="pure-button button-success button-candidate" to="/play">Play Now!</Link>
            </p>
          </div>
        </div>
      );
    }


    return (
      <div>
        <AllStats results={results} />
      </div>
    );
  }
}


export default StatsComponent;
