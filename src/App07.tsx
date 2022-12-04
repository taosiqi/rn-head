import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  SectionList,
  View,
  Text,
  StatusBar,
} from 'react-native';

interface DataType {
  title: string;
  data?: Array<string>;
}
const data = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Item = ({title}: DataType) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const onRefresh = () => {
    console.log(123);
  };
  const [refreshing] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;
