import {FlatList, SafeAreaView, Text} from 'react-native';
import React from 'react';

import styles from './Channels.style';
import ChannelCard from '../../Components/Card/ChannelCard/ChannelCard';
import FloatingButton from '../../Components/FloatingButton/FloatingButton';
import ContentInputModal from '../../Components/Modal/ContentInput/ContentInputModal';
import parseContentData from '../../utils/parseContentData';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Channels = ({navigation}) => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);

  React.useEffect(() => {
    database()
      .ref('/rooms/')
      .on('value', snapshot => {
        const contentData = snapshot.val() 
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

    database().ref(`/rooms/`).push(contentObj)
  }
  const renderContent = ({item}) => (
    <ChannelCard message={item} navigation={navigation} item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {contentList.length > 0 ? (
        <FlatList data={contentList} renderItem={renderContent} />
      ) : (
        <Text style={styles.text}>Oda yok</Text>
      )}
      <FloatingButton onPress={handleInputToggle} />
      <ContentInputModal
        placeholder="Kanal adı"
        text="Oluştur "
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Channels;
