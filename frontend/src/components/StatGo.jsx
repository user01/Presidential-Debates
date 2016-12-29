import React from 'react';
import {Link} from 'react-router';

const StatGoCard = () => {
  return (
    <p className="center">
      <Link className="pure-button button-success button-candidate" to="/stats">Results</Link>
    </p>
  );
};

export default StatGoCard;
