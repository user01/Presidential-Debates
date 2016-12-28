import React from 'react';
// import FuelSavingsResults from './FuelSavingsResults';
// import FuelSavingsTextInput from './FuelSavingsTextInput';
import Chance from 'chance';

class GamePlayForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.left = () => {
      console.log(this);
      this.props.chooseLeft();
    };
    // this.onTimeframeChange = this.onTimeframeChange.bind(this);
    // this.fuelSavingsKeypress = this.fuelSavingsKeypress.bind(this);
  }

  // onTimeframeChange(e) {
  //   this.props.calculateFuelSavings(this.props.fuelSavings, 'milesDrivenTimeframe', e.target.value);
  // }

  render() {
    // const {fuelSavings} = this.props;

    console.log('Play Form Toggle: ', this.props.toggle);
    console.log(this.props);
    var chance = new Chance(this.props.toggle ? 451 : 343);
    return (
      <div>
        <h2>Game Play! {!this.props.toggle ? 'yes' : 'no'}</h2>
        <h2>Chancy: {chance.sentence()}</h2>
        <input type="submit" value="Clinton" onClick={this.left}/>
      </div>
    );
  }
}


export default GamePlayForm;
