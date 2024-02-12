import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './Input.style';


const Input = ({placeholder, value, onType, isSecure ,styleProp}) => {
  return (
    <View style={{...styles.container , ...styleProp}}>
      <TextInput
      autoCapitalize='none'
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onType}
        secureTextEntry={isSecure}
        placeholderTextColor="white"
      />
    </View>
  );
};

export default Input;