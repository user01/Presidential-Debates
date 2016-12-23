import React from 'react';
import {Link} from 'react-router';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        The game was derived from a <a href="https://www.kaggle.com/mrisdal/2016-us-presidential-debates">public domain data set on Kaggle</a> of the 2016 US Presidential Debates. The data was cleaned, reduced to features, and modeled with a Random Forest. The result was a ~80% success rate at predicting the speaker of each line in the third and final debate.
      </p>
      <p>
        The React boilerplate was created from <a href="https://github.com/coryhouse/react-slingshot">React-Slingshot
        starter kit</a>.
      </p>
    </div>
  );
};

export default AboutPage;
