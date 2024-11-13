import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Dashboard, Media, More} from '../../screens';
import {globalStyles} from '../../config/globalStyles';
import useAppTheme from '../../hooks/useAppTheme';
import {images} from '../../assets/images';

const Tab = createBottomTabNavigator<any>();

const TabStack = () => {
  const {colors} = useAppTheme();
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: globalStyles.tabBarStyle,
    }}
    >
        <Tab.Screen
          name="Dasboard"
          component={Dashboard}
          options={{
                tabBarIcon: ({ focused }) => (
                    <View style={globalStyles.tabContainer}>
                        <Image style={{width: 16, height: 16}} source={images.Dashboard} />
                        <Text style={[focused ? globalStyles.tabTextSelected : globalStyles.tabText]}>{"Dashboard"}</Text>
                    </View>
                ),
            }} />
        <Tab.Screen
          name="HomeScreen"
          component={Home}
          options={{
                tabBarIcon: ({ focused }) => (
                    <View style={globalStyles.tabContainer}>
                        <Image style={{width: 18, height: 18}} source={images.Watch} />
                        <Text style={[focused ? globalStyles.tabTextSelected : globalStyles.tabText]}>{"Watch"}</Text>
                    </View>
                ),
            }} />
        <Tab.Screen
          name="MediaScreen"
          component={Media}
          options={{
            tabBarIcon: ({ focused }) => (
                <View style={globalStyles.tabContainer}>
                    <Image style={{width: 17.5, height: 12.5}} source={images.Media} />
                    <Text style={[focused ? globalStyles.tabTextSelected : globalStyles.tabText]}>{"Media"}</Text>
                </View>
            ),
        }} />
        <Tab.Screen
          name="MoreScreen"
          component={More}
          options={{
            tabBarIcon: ({ focused }) => (
                <View style={globalStyles.tabContainer}>
                    <Image style={{width: 18, height: 18}} source={images.More} />
                    <Text style={[focused ? globalStyles.tabTextSelected : globalStyles.tabText]}>{"More"}</Text>
                </View>
            ),
        }} />
      </Tab.Navigator>
  );
};

export default TabStack;