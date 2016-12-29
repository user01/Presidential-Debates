import React from 'react';
import ScoreResults from './ScoreResults';
import LastResults from './LastResults';

import R from 'ramda';

class GamePlayForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.left = () => {
      this.props.chooseLeft();
    };
    this.right = () => {
      console.log('Right', this);
      this.props.chooseRight();
    };
  }

  render() {
    // console.log("Form props ", this.props);

    const currentElm = R.find(R.propEq('guess', 'none'), this.props.data);

    if (currentElm == null) {
      console.warn("!!!!!!! no elements match - should show game over");
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
          <i className="fa fa-quote-left" aria-hidden="true"></i>
          {currentElm.Text}
          <i className="fa fa-quote-right" aria-hidden="true"></i>
        </p>
      </div>
    );
  }
}


export default GamePlayForm;
