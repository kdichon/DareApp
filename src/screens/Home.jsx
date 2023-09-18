import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ItemCategory from '../component/ItemCategory';
import {useSelector} from 'react-redux';

const Home = () => {
  //Lecture & Récupération des données "Category" dans le store
  const categories = useSelector(state => state.category);
  console.log('categories', categories);

  return (
    <FlatList
      data={categories}
      renderItem={({item}) => <ItemCategory data={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default Home;
