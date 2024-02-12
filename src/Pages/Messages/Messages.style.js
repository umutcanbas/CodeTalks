import {StyleSheet} from 'react-native';
import colors from '../../Style/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 30,
    color: colors.darkblue,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    width: 250,
    height: 70,
  },
  button: {
    width: 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
