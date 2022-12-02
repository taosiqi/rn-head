import React from 'react';
import {StyleSheet, View, SafeAreaView, Text, Image} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://static-1253419794.cos.ap-nanjing.myqcloud.com/img/image.png',
          }}
        />
        <Image
          style={styles.img}
          source={require('../static/image/image.png')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 200,
    width: 200,
    margin: 10,
  },
});

export default App;
