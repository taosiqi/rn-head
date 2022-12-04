import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
const App = () => {
  const getGeo = () => {
    Geolocation.getCurrentPosition(info => console.log(info));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 20}} />
      <TouchableOpacity onPress={getGeo}>
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
