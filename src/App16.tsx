import * as React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

export default function App() {
  setTimeout(() => {
    RNBootSplash.hide({fade: true});
  }, 2000);
  return (
    <SafeAreaView style={styles.container}>
      <Text>123</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aliceblue',
  },
});
