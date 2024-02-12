import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';

import styles from './Login.style';
import Button from '../../../Components/Button/Button';
import Input from '../../../Components/Input/Input';
import authMessageParser from '../../../utils/authMessageParser';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);

  const goSing = () => {
    navigation.navigate('SingPage');
  };

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );

      setLoading(false);

      navigation.navigate('ChannelPage');
      showMessage({
        message: 'Başarıyla giriş yapıldı',
        type: 'success',
      });
    } catch (error) {
      showMessage({
        message: authMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>codetalks</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.usermail}
              onType={handleChange('usermail')}
              placeholder="e-mail"
            />
            <Input
              value={values.password}
              onType={handleChange('password')}
              placeholder="şifre"
              isSecure
            />
            <Button onPress={handleSubmit} text="Giriş Yap" />
          </>
        )}
      </Formik>
      <Button
        onPress={goSing}
        text="Kayıt Ol"
        theme="secondary"
        loading={loading}
      />
    </SafeAreaView>
  );
};

export default Login;
