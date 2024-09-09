import {
  DimensionValue,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

export type T_APP_BUTTON = {
  width?: DimensionValue;
  style?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean;
  buttonTitle: string;
  variant?: 'primary' | 'secondary' | 'outlined' | 'transparent';
  iconName?: string;
  iconPosition?: 'left' | 'right';
  backgroundColor?: string;
  titleColor?: string;
  loading?: boolean;
  buttonHeight?: DimensionValue;
  borderWidthColor?: string;
  leftIconSize?: number;
  buttonTitleStyle?: StyleProp<any>;
};
