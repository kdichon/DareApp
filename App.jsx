import {SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {add} from './src/redux/category';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home';
import TruthOrDare from './src/screens/TruthOrDare';
import ShowDareOrTruth from './src/screens/ShowDareOrTruth';

const Stack = createNativeStackNavigator();

const App = () => {
  //Fonction pour déployer sur la base
  const dispach = useDispatch();

  //Lecture des catégories dans le store
  // const storeCategory = useSelector(state => state.category);

  //Chargement des données
  const loadDbApp = async () => {
    const categories = await firestore().collection('TruthOrDare').get();

    //Vérification des données
    if (!categories.empty) {
      const dataCategories = categories.docs.map(doc => {
        return {id: doc.id, ...doc.data()};
      });

      //Enregistrement des categories dans le store
      dispach(add(dataCategories));
    }
  };

  //Chargement de l'application
  useEffect(() => {
    loadDbApp();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dare" component={TruthOrDare} />
        <Stack.Screen name="ShowDareOrTruth" component={ShowDareOrTruth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
