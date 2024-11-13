import {StyleSheet} from 'react-native';
import {
  WP,
  HP,
  appColors,
  appRadius,
  typography,
  appSpacings,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../theme';

export const styles = StyleSheet.create({
  topContainer: {
    paddingVertical: pixelSizeVertical(appSpacings[2]),
    paddingHorizontal: pixelSizeHorizontal(appSpacings[4]),
  },
  searchIcon: {
    width: WP(16),
    height: WP(16),
  },
  closeIcon: {
    width: WP(30),
    height: WP(30),
  },
  genreCard: {
    height: HP(100),
    width: '45%',
    backgroundColor: appColors.tmdbGrey,
    borderRadius: appRadius[2],
    marginVertical: HP(5),
    marginHorizontal: WP(5),
  },
  genreBgStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  genreImageStyle: {
    width: '100%',
    height: HP(100),
    borderRadius: appRadius[2],
  },
  genreCardText: {
    ...typography.MEDIUM.F_16,
    color: appColors.white,
    marginVertical: HP(10),
    marginHorizontal: WP(15),
  },
  lastCard: {
    position: 'absolute',
    left: 0,
  },
  columnStyle: {
    justifyContent: 'center',
  },
});
