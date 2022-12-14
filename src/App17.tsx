import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, Alert} from 'react-native';
import View from './components/View';
import RNBootSplash from 'react-native-bootsplash';
const App = () => {
  setTimeout(() => {
    RNBootSplash.hide({fade: true});
  }, 2000);
  useEffect(() => {
    getGoods();
  }, []);
  const getGoods = () => {
    fetch(
      'https://api.virapi.com/vir_github24hahb0a455de/demo/goods?page=1&page_size=20',
      {
        // method: 'get',
        headers: {
          'app-token':
            '$2a$10$6a5alD8TIZIPqjczCd9um.AJLXb6LS.3vOMLS1QQjUPzfwC3SbxsC',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        // console.log(res.data);
      });
  };
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
