import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../Style/color';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: colors.then,
    height: windowHeight / 5,
    width: windowWidth * 0.9,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    textAlign: 'center',
    margin: 10,
    padding: 10,
  },
  title: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    marginTop: 60,
  },
});
