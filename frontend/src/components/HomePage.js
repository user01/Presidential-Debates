import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1 className="center">2016 Presidential Debates</h1>
      <h3 className="center">Random Forest Prediction</h3>
      <div className="panel">
        <div className="panel-body">
          <p>Guess who spoke in the October 19, 2016 presidental debate!</p>
          <p>Compete against a Random Forest prediction model!</p>

          <div className="pure-g">
            <div className="pure-u-5-12 person-color">
              <p className="center">
                You <i className="fa fa-user" aria-hidden="true"></i>
              </p>
            </div>
            <div className="pure-u-1-6">
              <p className="center">
              VS
              </p>
            </div>
            <div className="pure-u-5-12 computer-color">
              <p className="center">
                Computer <i className="fa fa-cogs" aria-hidden="true"></i>
              </p>
            </div>
          </div>

          <p className="center">
            <Link className="pure-button button-success button-candidate" to="/play">Play Now!</Link>
          </p>

          <p>
            The game was derived from a <a target="_blank" href="https://www.kaggle.com/mrisdal/2016-us-presidential-debates">
              public domain data set on Kaggle
            </a> of the 2016 US Presidential Debates.
          </p>
          <p>
            The data was cleaned, reduced to features, and the speaker was modeled with a Random
            Forest. The algorithm correctly predicted who spoke each line with an 80% success rate.
            The full code for the model and
            this site can be viewed on <a target="_blank" href="https://github.com/user01/PresidentialDebates">
              GitHub
            </a>.
          </p>
          <p>
            The React boilerplate was created from <a target="_blank" href="https://github.com/coryhouse/react-slingshot">
              React-Slingshot starter kit
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
