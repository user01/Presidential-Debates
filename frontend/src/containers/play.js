import React from 'react';
// import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/playActions';
import GamePlayForm from '../components/GamePlayForm';

export const PlayPage = (props) => {
  // <GamePlayForm
  // saveFuelSavings={props.actions.saveFuelSavings}
  // calculateFuelSavings={props.actions.calculateFuelSavings}
  // fuelSavings={props.fuelSavings}
  // />
  // console.log('Play Page Toggle: ', props.game.toggle);
  console.log('Play Page Props: ', props);
  return (
    <div>
      <h2>Play Page! {props.toggle ? 'yes' : 'no'}</h2>
      <GamePlayForm
        toggle={props.toggle}
        chooseLeft={props.actions.chooseLeft} />
    </div>
  );
};

// PlayPage.propTypes = {
//   actions: PropTypes.object.isRequired,
//   fuelSavings: PropTypes.object.isRequired
// };

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    presidental_statements: state.game.state,
    toggle: state.game.toggle
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
