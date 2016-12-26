import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/playActions';
// import FuelSavingsForm from '../components/FuelSavingsForm';

export const PlayPage = (props) => {
  // <FuelSavingsForm
  // saveFuelSavings={props.actions.saveFuelSavings}
  // calculateFuelSavings={props.actions.calculateFuelSavings}
  // fuelSavings={props.fuelSavings}
  // />
  return (
    <div>
      <h2>Play Page! {props.toggle ? 'yes' : 'no'}</h2>
    </div>
  );
};

// PlayPage.propTypes = {
//   actions: PropTypes.object.isRequired,
//   fuelSavings: PropTypes.object.isRequired
// };

function mapStateToProps(state) {
  return {
    game: state.game
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayPage);
