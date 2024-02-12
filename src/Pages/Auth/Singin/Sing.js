import {BackHandler, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import authMessageParser from '../../../utils/authMessageParser';
import {showMessage, hideMessage} from 'react-native-flash-message';

import styles from './Sing.style';
import Input from '../../../Components/Input/Input';
import Button from '../../../Components/Button/Button';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sing = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);

  const goLogin = () => {
    navigation.navigate('LoginPage');
  };

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'danger',
      });
    }
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
        setLoading(false),
      );
      navigation.navigate('LoginPage');

      showMessage({
        message: 'Kullanıcı oluşturuldu',
        type: 'success',
      });
    } catch (error) {
      setLoading(false);

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
        {({values, handleSubmit, handleChange}) => (
          <>
            <Input
              placeholder="e-mail"
              value={values.usermail}
              onType={handleChange('usermail')}
            />
            <Input
              placeholder="şifre"
              value={values.password}
              onType={handleChange('password')}
              isSecure
            />
            <Input
              placeholder="şifre tekrar"
              value={values.repassword}
              onType={handleChange('repassword')}
              isSecure
            />
            <Button text="Kayıt Ol" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Giriş Yap" onPress={goLogin} theme="secondary" />
    </SafeAreaView>
  );
};

export default Sing;
