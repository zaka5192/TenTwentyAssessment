import Toast, {
  BaseToast,
  ToastConfig,
  ToastConfigParams,
} from 'react-native-toast-message';
import {WP, appSpacings, typography} from '../theme';

const BORDER_LEFT_WIDTH = WP(20);
const PADDING_HORIONTAL = WP(appSpacings[4]);
const TOAST_COLORS = {
  success: '#039855',
  error: '#E73725',
  warning: '#e2b93b',
  text1: '#232B2B',
  text2: '#494949',
};

const text1Style = {
  ...typography.MEDIUM.F_16,
  color: TOAST_COLORS.text1,
};

const text2Style = {
  ...typography.REGULAR.F_12,
  color: TOAST_COLORS.text2,
};

export const toastConfig: ToastConfig = {
  success: (props: ToastConfigParams<any>) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: TOAST_COLORS.success,
        borderLeftWidth: BORDER_LEFT_WIDTH,
      }}
      contentContainerStyle={{paddingHorizontal: PADDING_HORIONTAL}}
      text1Style={text1Style}
      text2Style={text2Style}
      text1NumberOfLines={4}
      text2NumberOfLines={4}
    />
  ),
  error: (props: ToastConfigParams<any>) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: TOAST_COLORS.error,
        borderLeftWidth: BORDER_LEFT_WIDTH,
      }}
      contentContainerStyle={{paddingHorizontal: PADDING_HORIONTAL}}
      text1Style={text1Style}
      text2Style={text2Style}
      text1NumberOfLines={4}
      text2NumberOfLines={4}
    />
  ),
  warning: (props: ToastConfigParams<any>) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: TOAST_COLORS.warning,
        borderLeftWidth: BORDER_LEFT_WIDTH,
      }}
      contentContainerStyle={{paddingHorizontal: PADDING_HORIONTAL}}
      text1Style={text1Style}
      text2Style={text2Style}
      text1NumberOfLines={4}
      text2NumberOfLines={4}
    />
  ),
};
