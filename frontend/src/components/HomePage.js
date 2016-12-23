import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>{'2016 Presidential Debates'}</h1>
      <p>{'Identify who spoke the line in the debate!'}</p>
      <p>{'Compete against a Random Forest prediction model!'}</p>
      <p><Link to="/fuel-savings">Play Now!</Link></p>
    </div>
  );
};

export default HomePage;
