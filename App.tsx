import {StyleSheet} from 'react-native';
import React from 'react';
import {AppProvider, RealmProvider, UserProvider} from '@realm/react';

import {SYNC_CONFIG} from './sync.config';

import NavigationContainer from 'navigation/NavigationContainer';
import {schemas} from 'models';
import {RootNavigator} from 'navigation';
import {Login} from 'screens';

const App = () => {
  return (
    <AppProvider id={SYNC_CONFIG.appId}>
      <UserProvider fallback={Login}>
        <RealmProvider schema={schemas} schemaVersion={3}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
