import {Text, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {add} from './src/redux/category';
import ItemCategory from './src/component/ItemCategory';

const App = () => {
  //Fonction pour déployer sur la base
  const dispach = useDispatch();

  //Lecture des catégories dans le store
  const storeCategory = useSelector(state => state.category);

  //Chargement des données
  const loadDbApp = async () => {
    const categories = await firestore().collection('truthordare').get();

    //Vérification des données
    if (!categories.empty) {
      const dataCategories = categories.docs.map(doc => {
        return {id: doc.id, ...doc.data()};
      });
      console.log('dataCategories', dataCategories);

      //Enregistrement des categories dans le store
      dispach(add(dataCategories));
    }
  };

  //Chargement de l'application
  useEffect(() => {
    loadDbApp();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={storeCategory}
        //Éléments de la base de données
        renderItem={({item}) => <ItemCategory id={item.id} name={item.title} />}
        keyExtractor={item => item.id}
      />
      console.log(item.name)
    </SafeAreaView>
  );
};

export default App;
