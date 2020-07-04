import {AsyncStorage} from 'react-native';
export const isLogedIn = () => {
  return AsyncStorage.getItem('userToken')
    .then((success) => {
      console.log('success login id=>', success);
      return success;
    })
    .catch((e) => e);
};
