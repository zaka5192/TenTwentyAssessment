import {StyleSheet} from 'react-native';
import {
  HP,
  WP,
  appRadius,
  appSpacings,
  pixelSizeHorizontal,
  pixelSizeVertical,
  typography,
} from '../../theme';

export const styles = StyleSheet.create({
  mainContainer: {
    height: HP(52),
    borderRadius: WP(appRadius[8]),
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: pixelSizeHorizontal(appSpacings[1]),
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(appSpacings[2]),
    paddingVertical: pixelSizeVertical(appSpacings[4]),
  },
  labelButtonContainer: {
    height: HP(45),
    borderTopRightRadius: WP(appRadius[2]),
    borderBottomRightRadius: WP(appRadius[2]),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: pixelSizeHorizontal(appSpacings[7]),
  },
  buttonContainer: {
    width: HP(45),
    height: HP(52),
    borderTopRightRadius: WP(appRadius[8]),
    borderBottomRightRadius: WP(appRadius[8]),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainerLeft: {
    width: HP(45),
    height: HP(52),
    borderTopLeftRadius: WP(appRadius[8]),
    borderBottomLeftRadius: WP(appRadius[8]),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    ...typography.MEDIUM.F_14,
  },
});
