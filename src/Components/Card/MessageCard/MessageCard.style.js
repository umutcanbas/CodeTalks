import {StyleSheet} from 'react-native';
import colors from '../../../Style/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    padding: 10,
    marginTop: 20,
    marginHorizontal: 13,
    backgroundColor: colors.orange,
  },
  inner_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 5,
  },
  user: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  date: {
    color: 'grey',
    fontSize: 15,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
