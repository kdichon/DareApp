// import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import React from 'react';
import styles from '../../styles';
import {useNavigation} from '@react-navigation/native';

type NameProps = {id: number; name: string};
const ItemCategory = ({name}: NameProps) => {
  const navigation = useNavigation();
  const gototruthOrDare = () => {
    navigation.navigate('TruthOrDare');
  };
  return (
    <Button onPress={gototruthOrDare} contentStyle={styles.item}>
      {name}
    </Button>

    // <View style={styles.item}>
    //   <Text style={styles.title}>{name}</Text>
    // </View>
  );
};

export default ItemCategory;
