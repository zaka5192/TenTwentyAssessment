import {View, TextInput, Text} from 'react-native';
import React from 'react';
import {T_BUTTON_INPUT} from './button.input.types';
import ButtonWrapper from '../buttons/buttonWrapper/button.wrapper';
import useAppTheme from '../../hooks/useAppTheme';
import {styles} from './button.input.styles';
import {globalStyles} from '../../config/globalStyles';

const ButtonInput: React.FC<T_BUTTON_INPUT> = ({
  placeholder,
  value,
  icon,
  iconLeft,
  label,
  onChangeText,
  onButtonClick,
  onFocus,
  onBlur,
}) => {
  const {colors} = useAppTheme();
  return (
    <View
      style={[
        styles.mainContainer,
        {borderColor: colors.inputBorder, backgroundColor: colors.inputBg},
      ]}>
      {iconLeft && (
        <ButtonWrapper
          touchableOpacityProps={{
            style: [
              styles.buttonContainerLeft,
              {
                backgroundColor: colors.inputBg,
              },
            ],
          }}>
          {iconLeft}
        </ButtonWrapper>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.tmdbGrey}
          value={value}
          autoFocus={false}
          autoCapitalize="none"
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          style={[
            globalStyles.appInput,
            {
              color: colors.tmdbText,
            },
          ]}
        />
      </View>
      {label && (
        <ButtonWrapper
          onPress={onButtonClick}
          touchableOpacityProps={{
            style: [
              styles.labelButtonContainer,
              {backgroundColor: colors.inputBg},
            ],
          }}>
          <Text style={[styles.buttonTitle, {color: colors.white}]}>
            {label}
          </Text>
        </ButtonWrapper>
      )}

      {icon && (
        <ButtonWrapper
          onPress={onButtonClick}
          touchableOpacityProps={{
            style: [
              styles.buttonContainer,
              {
                backgroundColor: colors.inputBg,
              },
            ],
          }}>
          {icon}
        </ButtonWrapper>
      )}
    </View>
  );
};

export default ButtonInput;
