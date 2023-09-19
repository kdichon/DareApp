import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-paper';
import {firestore} from '@react-native-firebase/firestore';

const ShowDareOrTruth = ({route, navigation}) => {
  const [monText, setMonText] = useState('');

  //Récupération des paramètres passés dans la route
  const {id, type} = route.params;
  console.log('id:', id, 'type:', type);

  const retour = () => {
    navigation.goBack();
  };

  //Chargement des datas
  const loadData = async () => {
    const snapData = await firestore().collection('category').get();
    const data = snapData.docs.map(doc => {
      return {id: doc.id, ...doc.data()};
    });
    console.log('data', data);
  };

  useEffect(() => {
    loadData();
    setMonText(data[1]);
    console.log('monText', monText);
  }, []);

  return (
    <View>
      <Text>{monText}</Text>
      <Button onPress={retour}>Retour</Button>;
    </View>
  );
};

export default ShowDareOrTruth;
