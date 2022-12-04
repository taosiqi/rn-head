import {Button, StyleSheet, Text, View} from 'react-native';
import {FC} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

interface Props {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
}
const HomeScreen: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate('detail');
        }}
      />
    </View>
  );
};
function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  setTimeout(() => {
    RNBootSplash.hide({fade: true});
  }, 2000);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          options={{title: 'Awesome app'}}
          component={HomeScreen}
        />
        <Stack.Screen name="detail" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aliceblue',
  },
});
