import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2, 
        borderColor: '#E8E8E8', 
        borderRadius: 10,
        width: windowWidth - 50,
        height: windowHeight - 200,
    }
})

export default styles