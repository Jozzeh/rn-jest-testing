/* istanbul ignore file */
// Redux store

// EXAMPLE FOR REACT (async storage required for react native)
// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

// Imports: Redux
import rootReducer from '../reducers/rootReducer';

// Middleware: Redux Thunk (Async/Await)
const middleware = [thunk];

// Middleware: Redux Logger (For Development)
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// Redux: Store
const store = createStore(rootReducer, applyMiddleware(...middleware));

// Exports
export {store};
