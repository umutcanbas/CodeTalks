import {SafeAreaView, FlatList, Text, View} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import styles from './Messages.style';
import FloatingButton from '../../Components/FloatingButton/FloatingButton';
import ContentInputModal from '../../Components/Modal/ContentInput/ContentInputModal';
import MessageCard from '../../Components/Card/MessageCard/MessageCard';
import parseContentData from '../../utils/parseContentData';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

const Channels = ({route}) => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);
  const id = route.params?.roomId;

  React.useEffect(() => {
    database()
      .ref(`/rooms/${id}/messages/`)
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;

    const contentObj = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };

    database().ref(`/rooms/${id}/messages/`).push(contentObj);
  }

  const renderContent = ({item}) => <MessageCard message={item} />;

  return (
    <SafeAreaView style={styles.container}>
      {contentList.length > 0 ? (
        <FlatList data={contentList} renderItem={renderContent} />
      ) : (
        <Text style={styles.text}>Mesaj yok</Text>
      )}
       <FloatingButton onPress={handleInputToggle} />
      <ContentInputModal
        placeholder="Mesaj yaz"
        text="Gönder "
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />

    {/*   <View style={styles.footer}>
        <Input placeholder="mesaj yaz" styleProp={styles.input} />
        <Button text="Gönder" onPress={sendContent} styleProp={styles.button} />
      </View> */}
    </SafeAreaView>
  );
};

export default Channels;
