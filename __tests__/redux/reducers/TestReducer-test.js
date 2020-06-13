import {testTypes} from '../../../src/redux/actions/testActions';
import TestReducer from '../../../src/redux/reducers/testReducer';

describe('test reducer', () => {
  it('should return the initial state', () => {
    expect(TestReducer(undefined, {})).toEqual({
      count: 0,
    });
  });

  it('should handle incrementCounter', () => {
    expect(
      TestReducer(undefined, {
        type: testTypes.incrementCounter,
      }),
    ).toEqual({
      count: 1,
    });
  });

  it('should handle decrementCounter', () => {
    expect(
      TestReducer(
        {count: 4},
        {
          type: testTypes.decrementCounter,
        },
      ),
    ).toEqual({
      count: 3,
    });
  });
});
