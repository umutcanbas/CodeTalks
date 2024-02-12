import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

import styles from './ContentInputModal.style';
import Button from '../../Button/Button';

const ContentInputModal = ({visible, onClose, onSend , text , placeholder}) => {
  const [modalText, setModalText] = React.useState(null);

  const handleSend = () => {
    if (!modalText) {
      return;
    }
    onSend(modalText);
    setModalText(null);
  };

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput placeholder={placeholder} onChangeText={setModalText} multiline />
        </View>
        <Button text={text} onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
