import { Platform } from 'react-native';
 
const useCheckAndroid = () => {
    return Platform.OS === 'ios' ? false : true;
}
 
export default useCheckAndroid;