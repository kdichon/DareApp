import {View, Text} from 'react-native';
import React from 'react';
import {Button, Menu} from 'react-native-paper';

const TruthOrDare = ({route, navigation}) => {
  const {id} = route.params;
  console.log('id', id);
  const action = () => {
    navigation.navigate('ShowDareOrTruth', {id: id, type: 'dare'});
  };

  const verite = () => {
    navigation.navigate('ShowDareOrTruth', {id: id, type: 'truth'});
  };

  const retour = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Menu.Item leadingIcon="undo" onPress={retour} title="" />
      <Button onPress={action}>Action</Button>
      <Button onPress={verite}>Vérité</Button>
      <Button onPress={retour}>Retour</Button>
    </View>
  );
};

export default TruthOrDare;
