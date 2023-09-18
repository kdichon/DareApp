import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-paper';

const ShowDareOrTruth = ({route, navigation}) => {
  const [monText, setMonText] = useState('');
  //Récupération des paramètres passés dans la route
  const {id, type} = route.params;

  const retour = () => {
    navigation.goBack();
  };

  useEffect(() => {}, []);

  return (
    <View>
      <Text>{monText}</Text>
      <Button onPress={retour}>Retour</Button>;
    </View>
  );
};

export default ShowDareOrTruth;
