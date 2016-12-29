import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <div id="header-bar">
          <span>{"2016 Presidental Debates "}</span>
          <IndexLink to="/">About</IndexLink>
          {' | '}
          <Link to="/play">Play</Link>
          {' | '}
          <Link to="/stats">Stats</Link>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-24 pure-u-lg-1-5"></div>
          <div className="pure-u-22-24 pure-u-lg-3-5">
            {this.props.children}
          </div>
          <div className="pure-u-1-24 pure-u-lg-1-5"></div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
