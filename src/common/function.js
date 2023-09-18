import {useDispatch} from 'react-redux';
import {add} from '../redux/category';
import {firestore} from '@react-native-firebase/firestore';

//Fonction pour déployer sur la base
const dispach = useDispatch();

//Chargement des données
export const loadDbApp = async () => {
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
