import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainRootStackParamList} from 'navigation/types';
import {Home, Profile} from 'screens';

const Stack = createStackNavigator<MainRootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
