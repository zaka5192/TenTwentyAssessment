import {TouchableOpacity} from 'react-native';
import React from 'react';
import {T_BUTTON_WRAPPER} from './button.wrapper.types';

const ButtonWrapper: React.FC<T_BUTTON_WRAPPER> = ({
  onPress,
  children,
  touchableOpacityProps,
  disabled,
}) => {
  return (
    <TouchableOpacity
      {...touchableOpacityProps}
      activeOpacity={0.8}
      disabled={disabled}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonWrapper;
