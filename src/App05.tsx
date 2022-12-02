import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Button,
} from 'react-native';

const App = () => {
  const [state, setState] = useState('');
  const confirm = () => {
    console.log(state);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        {/*<TextInput*/}
        {/*  placeholder={'请输入'}*/}
        {/*  style={styles.input}*/}
        {/*  value={state}*/}
        {/*  onChangeText={setState}*/}
        {/*/>*/}
        {/*<TextInput*/}
        {/*  keyboardType={'numeric'}*/}
        {/*  secureTextEntry={true}*/}
        {/*  placeholder={'请输入'}*/}
        {/*  style={styles.input}*/}
        {/*  value={state}*/}
        {/*  onChangeText={setState}*/}
        {/*/>*/}
        <TextInput
          multiline={true}
          numberOfLines={5}
          placeholder={'请输入'}
          style={styles.input}
          value={state}
          onChangeText={setState}
        />
      </View>
      <Button title="提交" onPress={confirm} />
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
  input: {
    // height: 50,
    width: 200,
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 10,
  },
});

export default App;
