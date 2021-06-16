const { StyleSheet } = require('react-native');
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    flex: 1,
  },
  card: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#E8E8E8',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  image: {
    width: windowWidth,
    height: 320,
  },
  header: {
    fontSize: 20,
    color: '#A0A0A0',
  },
  logo: {
    width: 40,
    height: 40,
  },
});

export default styles;
