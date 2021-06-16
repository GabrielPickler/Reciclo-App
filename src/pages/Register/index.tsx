import { Icon, Layout } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';

import RegisterForm from '../../components/RegisterForm';
import colors from '../../styles/colors';
import styles from './styles';

const Register = () => {
  return (
    <Layout style={{ backgroundColor: colors.primary, flex: 1 }}>
      <TouchableWithoutFeedback
        style={{ margin: 10 }}
        onPress={() => Actions.pop()}>
        <Icon name="arrow-left" style={{ height: 30, color: 'white' }} />
      </TouchableWithoutFeedback>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Layout style={styles.container}>
          <RegisterForm />
        </Layout>
      </KeyboardAwareScrollView>
    </Layout>
  );
};

export default Register;
