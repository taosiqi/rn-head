import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
const App = () => {
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
        console.log(res.data);
      });
  };
  console.log(666);
  return (
    <SafeAreaView style={styles.container}>
      <Text>1234</Text>
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
