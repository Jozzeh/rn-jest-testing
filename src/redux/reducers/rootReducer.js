// combined reducer

//EXAMPLE
// Imports: Dependencies
import {combineReducers} from 'redux';
// Imports: Reducers
import TestReducer from './testReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  TestReducer: TestReducer,
});
// Exports
export default rootReducer;
