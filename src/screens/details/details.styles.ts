import {StyleSheet} from 'react-native';
import {
  HP,
  WP,
  appColors,
  fullHeight,
  typography,
  appSpacings,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../theme';

export const styles = StyleSheet.create({
  posterContainer: {
    backgroundColor: appColors.tmdbWhite,
  },
  posterStyle: {
    height: fullHeight / 1.5,
  },
  infoContainer: {
    paddingHorizontal: pixelSizeHorizontal(appSpacings[3]),
    paddingVertical: pixelSizeVertical(appSpacings[3]),
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: HP(20),
    paddingHorizontal: pixelSizeHorizontal(appSpacings[3]),
    paddingVertical: pixelSizeVertical(appSpacings[3]),
  },
  backIcon: {
    width: WP(7.5),
    height: HP(15),
  },
  watchText: {
    ...typography.MEDIUM.F_16,
    color: appColors.white,
    marginLeft: WP(20),
  },
  genreMainContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: pixelSizeHorizontal(appSpacings[3]),
    paddingVertical: pixelSizeVertical(appSpacings[2]),
  },
  genresContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  genreItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: HP(20),
    margin: pixelSizeHorizontal(appSpacings[2]),
    paddingHorizontal: pixelSizeHorizontal(appSpacings[3]),
    paddingVertical: pixelSizeVertical(appSpacings[2]),
  },
  genreText: {
    ...typography.BOLD.F_12,
    color: appColors.white,
  },
  headerText: {
    ...typography.MEDIUM.F_16,
    color: appColors.tmdbText,
  },
  overviewText: {
    ...typography.REGULAR.F_12,
    color: appColors.tmdbText,
  },
  ticketsBtn: {
    position: 'absolute',
    bottom: HP(90),
    alignSelf: 'center',
    marginVertical: pixelSizeVertical(appSpacings[2]),
  },
  closeBtn: {
    alignSelf: 'flex-end',
    marginHorizontal: pixelSizeHorizontal(appSpacings[3]),
  },
  pausePlayBtn: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  watchBtn: {
    position: 'absolute',
    bottom: HP(30),
    alignSelf: 'center',
    marginVertical: pixelSizeVertical(appSpacings[2]),
  },
  watchBtnText: {
    color: appColors.white,
  },
  videoContainer: {
    height: '95%',
    width: '100%',
  },
  main: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  pausedView: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    height: '95%',
    justifyContent: 'center',
    zIndex: 1,
  },
});
