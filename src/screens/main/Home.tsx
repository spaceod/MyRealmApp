import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useQuery, useRealm, useUser} from '@realm/react';
import {Task} from '../../models/Task';
import {HomeProps} from 'types/navigation';

const Home = ({navigation}: HomeProps) => {
  const realm = useRealm();
  const app = useUser();
  const tasks = useQuery(Task);

  const [task, setTask] = useState('');

  const handleAddPerson = () => {
    if (task)
      realm.write(() => {
        realm.create('Task', {
          description: task,
        });
        setTask('');
      });
    else Alert.alert('Enter task');
  };

  const onToggleStatus = (task: Task) => {
    console.log(task);
    realm.write(() => {
      task.isComplete = !task.isComplete;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <Text onPress={async () => await app.logOut()}>Logout</Text>

        <Text onPress={() => navigation.navigate('Profile')}>Profile</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginStart: 20,
          marginEnd: 12,
        }}>
        <TextInput
          value={task}
          placeholder="Enter New Task"
          autoCapitalize="none"
          nativeID="description"
          multiline={true}
          numberOfLines={8}
          style={{flex: 1}}
          onChangeText={setTask}
        />
        <Button title="Save" onPress={handleAddPerson} />
      </View>

      <FlatList
        data={tasks}
        renderItem={({item}) => {
          return (
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{flex: 1}}
                onPress={() => {
                  realm.write(() => {
                    realm.delete(item);
                  });
                }}>{`${item._id}  ${item.description}`}</Text>
              <Text
                onLongPress={() => {
                  onToggleStatus(item);
                }}
                onPress={() =>
                  Alert.prompt(
                    'Enter password',
                    'Enter your password to claim your $1.5B in lottery winnings',
                    [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {
                        text: 'OK',
                        onPress: text => {
                          console.log('OK Pressed, password: ' + text);
                          if (text) {
                            // onUpdateDescription(item, text);
                            realm.write(() => {
                              item.description = text;
                            });
                          }
                        },
                      },
                    ],
                    'plain-text',
                  )
                }
                style={{marginEnd: 20}}>
                {item.isComplete.toString()}
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
