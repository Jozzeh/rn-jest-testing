/**
 * @format
 */

import 'react-native';
import React from 'react';
import Button from '../../src/button/Button';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

// *** RENDERING & SNAPSHOTTING ***
it('Button renders correctly', () => {
  const button = renderer.create(<Button />).toJSON();
  expect(button).toMatchSnapshot();
});

// *** RENDERING AND ASSERTING VALUE ***
it('Button title prop renders correctly', () => {
  const testValue = 'Test';
  const button = renderer.create(<Button title={testValue} />);
  let buttonobj = button.root;
  const renderedElement = buttonobj.find(
    (el) => el.props.testID === 'buttonText',
  );

  expect(renderedElement.props.children).toBe(testValue.toUpperCase());
});

// *** ASSERT RETURN VALUE OF EVENTS / FUNCTIONS ***
it('Button fires click event', () => {
  const button = renderer.create(<Button />);
  let instanceobj = button.root;
  const renderedElement = instanceobj.find(
    (el) => el.props.testID === 'buttonTester',
  );

  const pressValue = renderedElement.props.onPress();
  expect(pressValue).toBe('Testing is cool.');
});

// *** ASSERT RETURN VALUE OF EVENTS / FUNCTIONS ***
it('Button fire other prop events', () => {
  let button;
  act(() => {
    button = renderer.create(<Button />);
  });
  let instanceobj = button.root;
  const renderedElement = instanceobj.find(
    (el) => el.props.testID === 'buttonTester',
  );

  // here we check if the function runs...
  act(() => {
    renderedElement.props.onHideUnderlay();
    renderedElement.props.onShowUnderlay();
  });
});
