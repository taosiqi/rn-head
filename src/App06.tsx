import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const App = () => {
  const [state, setState] = useState('123');
  const confirm = () => {
    console.log(state);
  };
  return (
    <View style={styles.viewContainer}>
      <TouchableHighlight onPress={confirm} underlayColor={'#efefef'}>
        <View style={styles.item}>
          <Text style={styles.text}>red</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={confirm} activeOpacity={0.3}>
        <View style={styles.item}>
          <Text style={styles.text}>red</Text>
        </View>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={confirm}>
        <View style={styles.item}>
          <Text style={styles.text}>red</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 100,
  },
  item: {
    borderWidth: 1,
    borderColor: 'red',
    width: 100,
    height: 50,
    // marginBottom: 20,
  },
  text: {
    textAlignVertical: 'center',
    textAlign: 'center',
    lineHeight: 50,
    color: 'red',
  },
});

export default App;
