import React from 'react';
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';

export type T_BUTTON_INPUT = {
  placeholder?: string;
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  icon?: React.ReactNode;
  iconLeft?: React.ReactNode;
  label?: string;
  editable?: boolean;
  onButtonClick?: ((event: GestureResponderEvent) => void) | undefined;
  onFocus?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
};
