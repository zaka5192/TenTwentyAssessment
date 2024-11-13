import React from 'react';
import {ScreenWrapper, AppButton} from '../../components';
import {T_DASHBOARD_ROUTE_PARAMS} from './dashboard.types';
import {styles} from './dashboard.styles';

const Dashboard: React.FC<T_DASHBOARD_ROUTE_PARAMS> = ({navigation}) => {

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

export default Dashboard;