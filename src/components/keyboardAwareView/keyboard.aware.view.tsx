import React from 'react';
import {T_KEYBOARD_AWARE_VIEW} from './keyboard.aware.view.types';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {globalStyles} from '../../config/globalStyles';

const KeyboardAwareView: React.FC<T_KEYBOARD_AWARE_VIEW> = ({children}) => {
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[
        globalStyles.screenScrollView,
        globalStyles.screenPadding,
        globalStyles.screenVGap,
      ]}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAwareView;
