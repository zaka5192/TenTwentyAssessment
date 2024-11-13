import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import TabStack from '../tabStack/tab.stack';
import {DetailsScreen, Search} from '../../screens';
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
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="SearchScreen" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;