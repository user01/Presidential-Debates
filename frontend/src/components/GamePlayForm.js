import React from 'react';
import ScoreResults from './ScoreResults';
import LastResults from './LastResults';
import {Link} from 'react-router';

import R from 'ramda';

class GamePlayForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.left = () => {
      this.props.chooseLeft();
    };
    this.right = () => {
      this.props.chooseRight();
    };
  }

  render() {
    // console.log("Form props ", this.props);

    const currentElm = R.find(R.propEq('guess', 'none'), this.props.data);

    if (currentElm == null) {
      console.warn("!!!!!!! no elements match - should show game over");
      return (
        <div>
          <LastResults results={this.props.data} />
          <h3 className="center">Congratulations!</h3>
          <p>You have completed the entire debate. Would you care to see your <Link to="/stats">statistics against the algorithm</Link>?</p>
          <p className="center">
            <Link className="pure-button button-success button-candidate" to="/stats">Statistics</Link>
          </p>

        </div>
      );
    }

    return (
      <div>
        <LastResults results={this.props.data} />
        <div className="pure-g">
          <div className="pure-u-1-2 center">
            <button className="pure-button button-candidate button-clinton" onClick={this.left}>Clinton</button>
          </div>
          <div className="pure-u-1-2 center">
            <button className="pure-button button-candidate button-trump" onClick={this.right}>Trump</button>
          </div>
        </div>
        <p>
          <i className="fa fa-quote-left" style={{'paddingRight': '0.5em'}} aria-hidden="true"></i>
          {currentElm.Text}
          <i className="fa fa-quote-right" style={{'paddingLeft': '0.2em', 'float':'right'}} aria-hidden="true"></i>
        </p>
      </div>
    );
  }
}


export default GamePlayForm;
