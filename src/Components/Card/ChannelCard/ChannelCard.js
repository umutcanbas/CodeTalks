import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './ChannelCard.style';

const ChannelCard = ({navigation, item}) => {
  function goMessage() {
    navigation.navigate('MessagePage', {roomId: item?.id});
  }

  return (
    <TouchableOpacity style={styles.container} onPress={goMessage}>
      <View>
        <Text style={styles.title}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChannelCard;
