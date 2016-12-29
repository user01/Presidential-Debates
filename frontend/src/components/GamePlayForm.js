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

  // onTimeframeChange(e) {
  //   this.props.calculateFuelSavings(this.props.fuelSavings, 'milesDrivenTimeframe', e.target.value);
  // }

  render() {
    console.log("Form props ", this.props);
    // const {fuelSavings} = this.props;

    const currentElm = R.find(R.propEq('guess', 'none'), this.props.data);

    if (currentElm == null) {
      console.warn("!!!!!!! no elements match - should show game over");
    }
    console.log(currentElm);

    const fn = () => {
      console.log('GO!');
    }

    return (
      <div>
        <LastResults results={this.props.data} />
        <button className="pure-button" onClick={this.left}>Clinton</button>
        <button className="pure-button" onClick={this.right}>Trump</button>
        <ScoreResults results={this.props.data} />
        <p><i className="fa fa-camera-retro"></i> {currentElm.Text}</p>
      </div>
    );
  }
}


export default GamePlayForm;
