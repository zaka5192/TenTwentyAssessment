import {StyleSheet} from 'react-native';
import {
  HP,
  WP,
  typography,
  pixelSizeHorizontal,
  pixelSizeVertical,
  appSpacings,
} from '../../theme';

export const styles = StyleSheet.create({
  cardView: {
    backgroundColor: '#ffffff',
    width: WP(114),
    height: HP(104),
    borderRadius: HP(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: pixelSizeHorizontal(appSpacings[1]),
    padding: pixelSizeVertical(appSpacings[3]),
    elevation: 6,
    borderColor: '#ffffff',
    shadowColor: 'rgba(0,0,1,0.3)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.37,
    shadowRadius: 2.49,
  },
  labelText: {
    ...typography.REGULAR.F_12,
    color: '#000000',
  },
  iconContainer: {
    padding: pixelSizeVertical(appSpacings[3]),
    borderRadius: HP(20),
    backgroundColor: '#F2F8FE',
    marginBottom: HP(10),
  },
});
