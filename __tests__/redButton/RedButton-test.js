/**
 * @format
 */

import 'react-native';
import React from 'react';
import ConnectedRedButton from '../../src/redButton/RedButton';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

describe('My connected Red Button component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      TestReducer: {
        count: 0,
      },
    });
  });

  it('RedButton click event and becomes disabled', () => {
    let button;
    act(() => {
      button = renderer.create(
        <Provider store={store}>
          <ConnectedRedButton />
        </Provider>,
      );
    });
    const buttonInstance = button.root;
    const renderedElement = buttonInstance.find(
      (el) => el.props.testID === 'buttonTester',
    );

    //button should be enabled at first render
    expect(renderedElement.props.enabled).toEqual(true);
    act(() => {
      renderedElement.props.onLongPress();
    });
    expect(renderedElement.props.enabled).toEqual(false);

    //Next line will not fire because enabled is false
    act(() => {
      renderedElement.props.onPress();
    });

    act(() => {
      renderedElement.props.onLongPress();
    });
    expect(renderedElement.props.enabled).toEqual(true);
  });

  it('Assert initial state of button text', () => {
    let button;
    act(() => {
      button = renderer.create(
        <Provider store={store}>
          <ConnectedRedButton />
        </Provider>,
      );
    });
    const buttonInstance = button.root;

    const renderedElement = buttonInstance.find(
      (el) => el.props.testID === 'buttonTester',
    );

    const renderedTextElement = buttonInstance.find(
      (el) => el.props.testID === 'RedButtonText',
    );
    expect(renderedTextElement.props.children[1]).toEqual(0);
    act(() => {
      renderedElement.props.onPress();
    });
  });
});
