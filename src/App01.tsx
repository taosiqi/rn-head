import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

const App = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  console.log(windowWidth, windowHeight);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
          hello1
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={[styles.text]}>hello2</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.text}>hello3</Text>
      </View>
      {/*<ScrollView style={styles.scrollView}>*/}
      {/*</ScrollView>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // scrollView: {
  //   backgroundColor: 'white',
  // },
  sectionContainer: {
    flex: 1,
    height: 150,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'green',
  },
  text: {
    fontSize: 30,
    lineHeight: 150,
    textAlign: 'center',
    // fontWeight: 'bold',
  },
});

export default App;
