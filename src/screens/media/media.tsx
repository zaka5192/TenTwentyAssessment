import React from 'react';
import {ScreenWrapper, AppButton} from '../../components';
import {T_MEDIA_ROUTE_PARAMS} from './media.types';
import {styles} from './media.styles';

const Media: React.FC<T_MEDIA_ROUTE_PARAMS> = ({navigation}) => {

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

export default Media;