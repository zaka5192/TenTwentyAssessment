import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, DetailsScreen} from '../../screens';

const Stack = createNativeStackNavigator<any>();

const TabStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        animation: 'fade',
        headerShown: false,
      }}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
  );
};

export default TabStack;