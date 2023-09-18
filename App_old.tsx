import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TruthOrDare from './src/screens/TruthOrDare';
import ItemCategory from './src/component/ItemCategory';
// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const categories = useSelector(state => state.category);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({item}) => <ItemCategory id={item.id} name={item.name} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screen>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TruthorDare" component={TruthOrDare} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// import {FlatList, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {useSelector} from 'react-redux';

// const App = () => {
//   const categories = useSelector(state => state.category);
//   console.log('categories:', categories);

//   return (
//     <View>
//       <FlatList
//         data={categories}
//         keyExtractor={categories => categories.id}
//         renderItem={item => <Text>{item.name}</Text>}
//       />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

// // import {StyleSheet, Text, View} from 'react-native';
// // import firestore from '@react-native-firebase/firestore';
// // import React, {useEffect} from 'react';
// import {category} from './redux/category';
// import ItemCategory from './component/itemCategory';

// // const App = () => {
// //   const loadCategory = async () => {
// //     const categories = await firestore().collection('category').get();
// //     console.log('categories:', categories.docs);
// //     firestore()
// //       .collection('test')
// //       .add({
// //         name: 'Ada Lovelace',
// //         age: 30,
// //       })
// //       .then(() => {
// //         console.log('User added!');
// //       });
// //   };
// //   useEffect(() => {
// //     console.log('app load');
// //     loadCategory();
// //   }, []);
// //   return (
// //     <View>
// //       <Text>App</Text>
// //     </View>
// //   );
// // };

// // export default App;

// // const styles = StyleSheet.create({});
