import {Text, SafeAreaView, TouchableOpacity, View} from 'react-native';
import React from 'react';

import styles from './Button.style';

const Button = ({text, onPress, loading, theme='primary' , styleProp}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles[theme].container , ...styleProp }}>
      <View style={styles.button_container}>
        <Text style={styles[theme].title}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
