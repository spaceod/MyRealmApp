import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useUser} from '@realm/react';

const Profile = () => {
  const user = useUser();
  return (
    <View style={styles.container}>
      <Text>{`Profile : ${user?.profile?.email ?? ')'}`}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
