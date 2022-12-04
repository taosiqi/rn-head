import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('java');
  return (
    <SafeAreaView style={styles.container}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={itemValue => setSelectedLanguage(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
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
