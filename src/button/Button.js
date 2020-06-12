import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import {styles} from './Button.style';
import {Text, TouchableHighlight} from 'react-native';

export const buttonTypes = {primary: 'primary', secondary: 'secondary'};

const availableButtonTypes = [buttonTypes.primary, buttonTypes.secondary];
const Button = (props) => {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    standaloneFunctie();
  });

  function standaloneFunctie() {
    return true;
  }

  function buttonPressed() {
    return 'Testing is cool.';
  }

  return (
    <TouchableHighlight
      testID="buttonTester"
      style={[
        styles.lightMode.button.default,
        styles.lightMode.button.medium,
        styles.lightMode.button[props.type][pressed ? 'active' : 'default'],
      ]}
      activeOpacity={1}
      onHideUnderlay={() => {
        setPressed(false);
      }}
      onShowUnderlay={() => {
        setPressed(true);
      }}
      underlayColor={styles.lightMode.button[props.type].active.backgroundColor}
      onPress={() => {
        return buttonPressed();
      }}>
      <Text
        testID="buttonText"
        style={[
          styles.lightMode.title.default,
          styles.lightMode.title[props.size],
          styles.lightMode.title[props.type][pressed ? 'active' : 'default'],
        ]}>
        {props.title.toUpperCase()}
      </Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(availableButtonTypes),
  enabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  title: 'Button',
  enabled: true,
  type: buttonTypes.primary,
};

export default Button;
