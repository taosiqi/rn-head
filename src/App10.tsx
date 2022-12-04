import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: 'https://www.baidu.com/'}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
