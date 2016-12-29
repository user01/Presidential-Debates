import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/playActions';
import StatsComponent from '../components/StatsComponent';

export const StatsPage = ({state}) => {
  return (
    <div>
      <h1 className="center">Current Statistics</h1>
      <StatsComponent
        data={state}
        />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    state: state.game.state,
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
)(StatsPage);
