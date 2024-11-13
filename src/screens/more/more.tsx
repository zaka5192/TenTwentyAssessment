import React from 'react';
import {ScreenWrapper, AppButton} from '../../components';
import {T_MORE_ROUTE_PARAMS} from './more.types';
import {styles} from './more.styles';

const More: React.FC<T_MORE_ROUTE_PARAMS> = ({navigation}) => {

  const handleBackToWatch = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <ScreenWrapper>
      <AppButton
        style={styles.ticketsBtn}
        width={'90%'}
        buttonTitle='Back To Watch'
        onPress={handleBackToWatch}
      />
    </ScreenWrapper>
  );
};

export default More;