import {StyleSheet} from 'react-native';
import {
  HP,
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
  tabBarStyle: {
    backgroundColor: 'white',
    height: HP(85),
    borderTopWidth: 1,
    borderTopColor: '#F5F9FC',
    paddingHorizontal: pixelSizeHorizontal(appSpacings[1]),
    paddingVertical: pixelSizeVertical(appSpacings[2]),
  },
  tabTextSelected: {
    ...typography.MEDIUM.F_10,
    color: '#2C8BFD',
    marginTop: 5,
  },
  tabText: {
    ...typography.REGULAR.F_10,
    color: '#787381',
    marginTop: 5,
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: pixelSizeHorizontal(appSpacings[1]),
    paddingVertical: pixelSizeVertical(appSpacings[3]),
  },
  appInput: {
    ...typography.REGULAR.F_14,
  },
});
