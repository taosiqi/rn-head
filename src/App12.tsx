import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  const storeData = async (value: any) => {
    try {
      console.log(123);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const getMyObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      console.log(JSON.parse(typeof jsonValue === 'string' ? jsonValue : ''));
    } catch (e) {
      // read error
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => storeData({async: 1})}>
        <Text>set</Text>
      </TouchableOpacity>
      <View style={{padding: 20}} />
      <TouchableOpacity onPress={getMyObject}>
        <Text>get</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
