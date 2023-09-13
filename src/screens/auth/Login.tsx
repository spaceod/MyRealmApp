import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Realm from 'realm';
import {useApp} from '@realm/react';

const Login = () => {
  const app = useApp();

  async function logInUser() {
    try {
      await app.logIn(
        Realm.Credentials.emailPassword({
          email: 'xxxx',
          password: 'xxxx',
        }),
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>{`RN [MongoDB + Realm] Demo`}</Text>
      <View style={styles.subContainer}>
        <Text>Login</Text>
        <Button title="Log In" onPress={logInUser} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  headerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
});
