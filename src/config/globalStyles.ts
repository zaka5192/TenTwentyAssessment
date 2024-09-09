import {StyleSheet} from 'react-native';
import {
  appColors,
  appSpacings,
  pixelSizeHorizontal,
  pixelSizeVertical,
  typography,
} from '../theme';

export const globalStyles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  screenVGap: {
    rowGap: pixelSizeVertical(appSpacings[8]),
  },
  screenScrollView: {
    flexGrow: 1,
  },
  screenPadding: {
    paddingVertical: pixelSizeVertical(appSpacings[4]),
  },
  buttonTitle: {
    ...typography.MEDIUM.F_16,
    textAlign: 'center',
  },
});
