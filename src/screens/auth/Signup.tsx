import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useApp, useUser} from '@realm/react';
import {SignupProps} from 'types/navigation';

const Signup = ({navigation}: SignupProps) => {
  const app = useApp();
  const user = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Link email/password credentials to anonymous user
  // when creating and logging in email/password user.
  const registerAndLinkIdentities = async () => {
    if (email)
      try {
        await app.emailPasswordAuth.registerUser({email, password});
        const credentials = Realm.Credentials.emailPassword(email, password);
        await user.linkCredentials(credentials);
      } catch (err) {
        // Add error handling logic here
        console.log(err);
      }
    else console.log('Enter email/password credentials');
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        placeholder="Enter email"
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        value={password}
        placeholder="Enter password"
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button onPress={registerAndLinkIdentities} title="Link Credentials" />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    paddingVertical: 10,
  },
});
