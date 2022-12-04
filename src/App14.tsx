import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
const App = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  if (device == null) {
    return <Text>ing...</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 20}} />
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
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
