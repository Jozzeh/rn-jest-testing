import React, {useState} from 'react';

import PropTypes from 'prop-types';
import {styles} from './RedButton.style';
import {Text, TouchableHighlight} from 'react-native';

import TestActions from '../redux/actions/testActions';
import {connect} from 'react-redux';

export const buttonTypes = {primary: 'primary', secondary: 'secondary'};

const availableButtonTypes = [buttonTypes.primary, buttonTypes.secondary];
export const RedButton = (props) => {
  const [enabled, setEnabled] = useState(true);

  function buttonLongPressed() {
    // HIER EEN STATE CHANGE - DISABLE THE BUTTON
    setEnabled(!enabled);
  }

  function buttonPressed() {
    // HIER EEN PROPS CHANGE - DISPATCH COUNT
    props.incrementCounter();
  }

  return (
    <TouchableHighlight
      testID="buttonTester"
      enabled={enabled}
      style={[
        styles.lightMode.button.default,
        styles.lightMode.button.medium,
        styles.lightMode.button[props.type][enabled ? 'default' : 'disabled'],
      ]}
      activeOpacity={1}
      underlayColor={
        enabled
          ? styles.lightMode.button[props.type].active.backgroundColor
          : styles.lightMode.button[props.type].disabled.backgroundColor
      }
      onPress={() => {
        if (enabled) {
          buttonPressed();
        }
      }}
      onLongPress={() => {
        buttonLongPressed();
      }}>
      <Text
        testID="RedButtonText"
        style={[
          styles.lightMode.title.default,
          styles.lightMode.title[props.size],
          styles.lightMode.title[props.type][enabled ? 'default' : 'disabled'],
        ]}>
        Clicked: {props.count}
      </Text>
    </TouchableHighlight>
  );
};

RedButton.propTypes = {
  type: PropTypes.oneOf(availableButtonTypes),
  enabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

RedButton.defaultProps = {
  title: 'Button',
  enabled: true,
  type: buttonTypes.primary,
};

const mapStateToProps = (state) => {
  return {
    ...state.TestReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () => dispatch(TestActions.incrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RedButton);
