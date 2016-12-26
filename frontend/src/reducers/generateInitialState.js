import * as dataResults from '../../../generated/model.results.json';


export const blankState = () => {

  return {
    game: {
      toggle: false,
      dataResults
    }
  };
};

export default blankState;
