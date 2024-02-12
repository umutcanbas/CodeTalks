import {StyleSheet} from 'react-native';
import colors from '../../Style/color';

const base_style = StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  button_container: {
    backgroundColor: colors.darkblue,
    alignItems: 'center',
  },
  title: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 17,
    color: colors.white,
    padding: 7,
  },
});
export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.darkblue,
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.blue,
      borderColor: '#00897b',
    },
  }),
};
