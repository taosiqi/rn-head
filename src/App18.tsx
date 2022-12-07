import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import View from './components/View';
import RNBootSplash from 'react-native-bootsplash';
const App = () => {
  setTimeout(() => {
    RNBootSplash.hide({fade: true});
  }, 2000);
  const click = () => {
    console.log('does not work');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        onPress={click}
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}>
        Hello World!
      </View>
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
