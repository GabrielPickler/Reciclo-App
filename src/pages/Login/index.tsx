import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import styles from './styles';
import UserLogin from '../../components/UserLogin/index';
import { Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 2 }}>
      <Layout style={{ height: 300 }}>
        <Image
          style={styles.image}
          source={require('../../assets/nature.png')}
        />
      </Layout>
      <Layout style={styles.card}>
        <Layout style={styles.form}>
          <Layout
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-start',
              margin: 10,
            }}>
            <Text style={styles.header}>Sign in</Text>
          </Layout>
          <UserLogin />
        </Layout>
      </Layout>
    </KeyboardAwareScrollView>
  );
};

export default Login;
