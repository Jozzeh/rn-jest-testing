const testTypes = {
  incrementCounter: 'INCREMENT_COUNTER',
  decrementCounter: 'DECREMENT_COUNTER',
};

export {testTypes};

const testActions = {
  incrementCounter: () => {
    return (dispatch) => {
      return dispatch({
        type: testTypes.incrementCounter,
      });
    };
  },
  decrementCounter: () => {
    return (dispatch) => {
      return dispatch({
        type: testTypes.decrementCounter,
      });
    };
  },
};

export default testActions;
