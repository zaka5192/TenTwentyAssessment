import {View, Platform} from 'react-native';
import React from 'react';
import {T_SCREEN_WRAPPER} from './screen.wrapper.types';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
// import Animated, {FadeInDown} from 'react-native-reanimated';
import useAppTheme from '../../hooks/useAppTheme';
import {globalStyles} from '../../config/globalStyles';
import {WP} from '../../theme';

const ScreenWrapper: React.FC<T_SCREEN_WRAPPER> = ({children}) => {
  const {colors} = useAppTheme();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <View
        // entering={FadeInDown.duration(300)}
        style={[
          globalStyles.flexContainer,
          {
            backgroundColor: colors.white,
            paddingTop: Platform.OS === 'ios' ? insets.top : WP(20),
          },
        ]}>
        {children}
      </View>
    </SafeAreaProvider>
  );
};

export default ScreenWrapper;
