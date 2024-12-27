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
  headerView: {
    backgroundColor: '#2DA5FE',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    height: HP(135),
    borderBottomLeftRadius: HP(18),
    borderBottomRightRadius: HP(18),
    paddingTop: pixelSizeVertical(appSpacings[5]),
    paddingHorizontal: pixelSizeHorizontal(appSpacings[5]),
  },
  avatarView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarStyle: {
    width: HP(40),
    height: HP(40),
    borderRadius: HP(20),
  },
  badgeView: {
    position: 'absolute',
    right: -HP(5),
    bottom: -HP(5),
    backgroundColor: '#ffffff',
    padding: 1,
    borderRadius: HP(7.5),
  },
  nameView: {
    flex: 7,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: pixelSizeHorizontal(appSpacings[3]),
  },
  greetingsText: {
    ...typography.MEDIUM.F_14,
    color: '#ffffff',
  },
  nameText: {
    ...typography.MEDIUM.F_16,
    color: '#ffffff',
  },
  iconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: pixelSizeVertical(appSpacings[2]),
  },
});
