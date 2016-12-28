import * as dataResults from '../../../generated/model.results.json';
import Chance from 'chance';
import R from 'ramda';

const chance = new Chance();

export const emptyGameState = () => {
  return R.pipe(
    R.values,
    R.map(R.merge(R.__, {
      guess: 'none'
    })),
    (set) => chance.shuffle(set)
  )(dataResults);
};

export default emptyGameState;
