import produce from 'immer';
import {testTypes} from '../actions/testActions';

// Initial State
export const initialState = {
  count: 0,
};
// Reducers (Modifies The State And Returns A New State)
const TestReducer = (previousState = initialState, action) => {
  return produce(previousState, (newState) => {
    switch (action.type) {
      case testTypes.incrementCounter: {
        newState.count = previousState.count + 1;
        return newState;
      }
      case testTypes.decrementCounter: {
        newState.count = previousState.count - 1;
        return newState;
      }
      // Default
      default: {
        return previousState;
      }
    }
  });
};
// Exports
export default TestReducer;
