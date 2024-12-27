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
  flexOne: {
    flex: 1,
    backgroundColor: '#F5F9FC',
  },
  scrollView: {
    position: 'absolute',
    top: HP(90),
    alignSelf: 'center',
    paddingBottom: HP(190),
    paddingHorizontal: pixelSizeHorizontal(appSpacings[2]),
  },
  scrollStyles: {
    width: '100%',
    paddingBottom: HP(190),
  },
  portfolioView: {
    alignSelf: 'center',
    width: WP(325),
    height: HP(402),
    backgroundColor: '#ffffff',
    borderRadius: HP(16),
    alignItems: 'center',
    justifyContent: 'flex-start',
    elevation: 12,
    borderColor: '#ffffff',
    shadowColor: 'rgba(0,0,1,0.3)',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    paddingVertical: pixelSizeVertical(appSpacings[5]),
    paddingHorizontal: pixelSizeHorizontal(appSpacings[2]),
  },
  valueView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: pixelSizeHorizontal(appSpacings[3]),
  },
  valueTextView: {
    flex: 7,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  detailIconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  portfolioText: {
    ...typography.REGULAR.F_14,
    color: '#787381',
  },
  portfolioValueText: {
    ...typography.MEDIUM.F_24,
    color: '#000000',
  },
  portfolioValueTextAlt: {
    ...typography.MEDIUM.F_16,
    color: '#000000',
  },
  iconTextView: {
    marginLeft: WP(7.5),
  },
  chartView: {
    width: '100%',
    height: HP(170),
  },
  infoView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: pixelSizeHorizontal(appSpacings[2]),
  },
  infoColumn: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: pixelSizeHorizontal(appSpacings[2]),
  },
  infoLabel: {
    ...typography.REGULAR.F_12,
    color: '#787381',
  },
  infoValue: {
    ...typography.MEDIUM.F_14,
    color: '#000000',
  },
  separatorView: {
    width: WP(325),
    height: HP(1),
    backgroundColor: '#EDECEE',
    marginVertical: pixelSizeVertical(appSpacings[5]),
  },
  balanceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWalletView: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletIcon: {
    padding: HP(10),
    borderRadius: HP(21),
    backgroundColor: '#F2F8FE',
  },
  balanceValueView: {
    flex: 3.5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  addIconView: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: pixelSizeHorizontal(appSpacings[5]),
  },
  listLabelText: {
    color: '#000000',
    ...typography.MEDIUM.F_18,
    marginVertical: pixelSizeVertical(appSpacings[4]),
    marginLeft: pixelSizeHorizontal(appSpacings[2]),
  },
});
