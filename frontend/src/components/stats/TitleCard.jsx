import React from 'react';

const TitleCard = ({humanCorrect, computerCorrect}) => {
  if (humanCorrect == 0 && computerCorrect == 0) {
    return (
      <h3 className="center">
        No Data, so far.
      </h3>
    );
  }
  if (humanCorrect == computerCorrect) {
    return (
      <h3 className="center">
        Perfectly Even Score
      </h3>
    );
  }
  if (humanCorrect > computerCorrect) {
    return (
      <h3 className="center">
        Triumph for Humanity!
      </h3>
    );
  }
  if (humanCorrect < computerCorrect) {
    return (
      <h3 className="center">
        The Machine pulls ahead in the rankings.
      </h3>
    );
  }

  return (
    <div>
      <h3 className="center">Bug in code.</h3>
    </div>
  );
};

export default TitleCard;
