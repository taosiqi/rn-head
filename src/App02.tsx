import React from 'react';
import {
  Button,
  StyleSheet,
  Alert,
  View,
  SafeAreaView,
  Text,
} from 'react-native';

const App = () => {
  const createButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Button onPress={createButtonAlert} title="打开弹窗" color="#ffffff" />
      </View>
      <View style={styles.viewContainer}>
        <Button onPress={createButtonAlert} title="打开弹窗" color="#ffffff" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewContainer: {
    // flex: 1,
    width: 100,
    height: 100,
    padding: 10,
    margin: 10,
    // flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1572F9',
    zIndex: 100,
  },
});

export default App;
