import {StyleSheet} from 'react-native';
import {
  HP,
  WP,
  appColors,
  typography,
  appSpacings,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../theme';

export const styles = StyleSheet.create({
  headerText: {
    ...typography.MEDIUM.F_16,
  },
  headerTextContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: pixelSizeVertical(appSpacings[5]),
    paddingHorizontal: pixelSizeHorizontal(appSpacings[8]),
  },
  searchIcon: {
    width: WP(16),
    height: WP(16),
  },
  listContainer: {
    backgroundColor: appColors.tmdbWhite,
    paddingVertical: pixelSizeVertical(appSpacings[2]),
    paddingHorizontal: pixelSizeHorizontal(appSpacings[4]),
    paddingBottom: HP(70),
  },
  cardContainer: {
    backgroundColor: appColors.tmdbGrey,
    borderRadius: HP(10),
    marginVertical: pixelSizeVertical(appSpacings[3]),
  },
  moviePoster: {
    height: HP(180),
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingHorizontal: pixelSizeHorizontal(appSpacings[5]),
    paddingBottom: pixelSizeVertical(appSpacings[4]),
  },
  posterImageStyle: {
    borderRadius: HP(10),
  },
  titleText: {
    ...typography.MEDIUM.F_18,
    color: appColors.white,
  },
});
