import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import TabStack from '../tabStack/tab.stack';
import useAppTheme from '../../hooks/useAppTheme';

const Stack = createNativeStackNavigator<any>();

const RootStack = () => {
  const {colors} = useAppTheme();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Stack.Navigator
        initialRouteName="TabStack"
        screenOptions={{
          animation: 'fade',
          headerShown: false,
        }}>
        <Stack.Screen name="TabStack" component={TabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;