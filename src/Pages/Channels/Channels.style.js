import {StyleSheet} from 'react-native';
import colors from '../../Style/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 30,
    color: colors.darkblue,
  },
});
