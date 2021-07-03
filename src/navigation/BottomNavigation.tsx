import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { Navigation } from './Navigation';

const Tab = createBottomTabNavigator();

export const BottonNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Navigation" options={{title: 'Home' }} component={Navigation} />
      <Tab.Screen name="FavoriteScreen" options={{title: 'Favorite' }} component={FavoriteScreen} />
    </Tab.Navigator>
  );
}