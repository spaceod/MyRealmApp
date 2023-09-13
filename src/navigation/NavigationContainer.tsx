import {StyleSheet} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer as RNNavigationContainer} from '@react-navigation/native';

export const NavigationContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <RNNavigationContainer>{children}</RNNavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default NavigationContainer;

const styles = StyleSheet.create({});
