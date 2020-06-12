import testActions from '../../../src/redux/actions/testActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test actions', () => {
  it('should create an action to increment the counter', () => {
    const store = mockStore({count: 0});

    const dispatchIncrement = store.dispatch(testActions.incrementCounter());
    const dispatchDecrement = store.dispatch(testActions.decrementCounter());
    expect(store.getActions()[0]).toEqual(dispatchIncrement);
    expect(store.getActions()[1]).toEqual(dispatchDecrement);

    // *** BE VERY CAREFULL NOT TO FETCH IN TESTING ***
  });
});
