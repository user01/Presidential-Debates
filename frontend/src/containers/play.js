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
  // console.log('Play Page Props: ', props);
  return (
    <div>
      <GamePlayForm
        toggle={props.toggle}
        data={props.presidental_statements}
        chooseLeft={props.actions.chooseLeft}
        chooseRight={props.actions.chooseRight}
        />
    </div>
  );
};

function mapStateToProps(state) {
  // console.log('mapStateToProps', state);
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
