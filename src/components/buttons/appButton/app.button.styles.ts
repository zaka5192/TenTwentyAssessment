import {StyleSheet} from 'react-native';
import {
  HP,
  WP,
  appRadius,
  appSpacings,
  pixelSizeHorizontal,
} from '../../../theme';

export const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: WP(appRadius[2]),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: pixelSizeHorizontal(appSpacings[3]),
    columnGap: pixelSizeHorizontal(appSpacings[2]),
  },
  gradientBorder: {
    borderRadius: WP(appRadius[2]),
  },
  outlinedLG: {
    borderRadius: WP(appRadius[2]),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // innerButton: {
  //   backgroundColor: 'white',
  //   borderRadius: 8, // Adjust as needed
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   padding: 15,
  // },
  LgButtonContainer: {
    borderRadius: WP(appRadius[1]),
    margin: WP(appSpacings[2] / 2),
    paddingHorizontal: pixelSizeHorizontal(appSpacings[2]),
    justifyContent: 'center',
  },
});
