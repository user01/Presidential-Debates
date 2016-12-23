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
          <IndexLink to="/">Home</IndexLink>
          {' | '}
          <Link to="/fuel-savings">Play</Link>
          {' | '}
          <Link to="/about">About</Link>
        </div>
        <div className="pure-g">
          <div className="pure-u-1-24 pure-u-sm-1-5"></div>
          <div className="pure-u-22-24 pure-u-sm-3-5">
            {this.props.children}
          </div>
          <div className="pure-u-1-24 pure-u-sm-1-5"></div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
