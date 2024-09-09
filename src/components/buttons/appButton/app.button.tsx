import {Text, ActivityIndicator, View} from 'react-native';
import React from 'react';
import {T_APP_BUTTON} from './app.button.types';
import useAppTheme from '../../../hooks/useAppTheme';
import ButtonWrapper from '../buttonWrapper/button.wrapper';
import {globalStyles} from '../../../config/globalStyles';
import {styles} from './app.button.styles';
import {HP} from '../../../theme';

const AppButton: React.FC<T_APP_BUTTON> = ({
  width,
  style,
  onPress,
  disabled,
  buttonTitle,
  variant,
  backgroundColor,
  titleColor,
  loading,
  buttonHeight,
  borderWidthColor,
  buttonTitleStyle,
}) => {
  const {colors} = useAppTheme();

  return (
    <ButtonWrapper
      onPress={onPress}
      disabled={disabled || loading}
      >
        <View
          style={[
            style,
            styles.buttonContainer,
            {
              height: buttonHeight ? buttonHeight : HP(44),
              width: width,
              opacity: disabled ? 0.5 : 1,
              backgroundColor: backgroundColor
                ? backgroundColor
                : variant === 'outlined'
                ? 'transparent'
                : variant === 'secondary'
                ? 'rgba(231,55,37,0.3)'
                : variant === 'transparent'
                ? 'transparent'
                : colors.tmdbBlue,
            },
            variant === 'outlined' && {
              borderWidth: 1,
              borderColor: borderWidthColor
                ? borderWidthColor
                : colors.tmdbBlue,
            },
          ]}>
          {loading ? (
            <ActivityIndicator
              size="small"
              color={
                titleColor
                  ? titleColor
                  : variant === 'outlined'
                  ? colors.tmdbBlue
                  : variant === 'secondary'
                  ? colors.tmdbBlue
                  : variant === 'transparent'
                  ? colors.tmdbBlue
                  : colors.white
              }
            />
          ) : (
            <Text
              style={[
                buttonTitleStyle ? buttonTitleStyle : globalStyles.buttonTitle,
                {
                  color: titleColor
                    ? titleColor
                    : variant === 'outlined'
                    ? colors.tmdbBlue
                    : variant === 'secondary'
                    ? colors.tmdbBlue
                    : variant === 'transparent'
                    ? colors.tmdbBlue
                    : colors.white,
                },
              ]}>
              {buttonTitle}
            </Text>
          )}
        </View>
    </ButtonWrapper>
  );
};

export default AppButton;
