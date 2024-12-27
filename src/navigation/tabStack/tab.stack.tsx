import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/Entypo';
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
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: globalStyles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={globalStyles.tabContainer}>
              <Icon
                name="home"
                size={18}
                color={focused ? '#2C8BFD' : '#787381'}
              />
              <Text
                style={[
                  focused ? globalStyles.tabTextSelected : globalStyles.tabText,
                ]}>
                {'Home'}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={globalStyles.tabContainer}>
              <Icon
                name="pie-chart"
                size={18}
                color={focused ? '#2C8BFD' : '#787381'}
              />
              <Text
                style={[
                  focused ? globalStyles.tabTextSelected : globalStyles.tabText,
                ]}>
                {'PortFolio'}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MediaScreen"
        component={Media}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={globalStyles.tabContainer}>
              <Icon
                name="arrow-down-circle"
                size={18}
                color={focused ? '#2C8BFD' : '#787381'}
              />
              <Text
                style={[
                  focused ? globalStyles.tabTextSelected : globalStyles.tabText,
                ]}>
                {'Invest'}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MediaScreenn"
        component={Media}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={globalStyles.tabContainer}>
              <FIcon
                name="wallet"
                size={18}
                color={focused ? '#2C8BFD' : '#787381'}
              />
              <Text
                style={[
                  focused ? globalStyles.tabTextSelected : globalStyles.tabText,
                ]}>
                {'Wallet'}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MoreScreen"
        component={More}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={globalStyles.tabContainer}>
              <FIcon
                name="dots-three-horizontal"
                size={18}
                color={focused ? '#2C8BFD' : '#787381'}
              />
              <Text
                style={[
                  focused ? globalStyles.tabTextSelected : globalStyles.tabText,
                ]}>
                {'More'}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
