import React from 'react';
import {GestureResponderEvent, TouchableOpacityProps} from 'react-native';

export type T_BUTTON_WRAPPER = {
  children: React.ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  touchableOpacityProps?: TouchableOpacityProps;
  disabled?: boolean;
};
