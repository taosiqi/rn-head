import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  StatusBar,
  Switch,
  ActivityIndicator,
  Platform,
} from 'react-native';

const App = () => {
  console.log(Platform.OS);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="red" hidden={false} />
      <View style={styles.viewContainer}>
        <Text>123</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <ActivityIndicator size="small" color="red" />
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
    backgroundColor: 'green',
  },
});

export default App;
