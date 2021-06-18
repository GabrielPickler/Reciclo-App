import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { Button, Input, Text, Layout } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import ButtonSpinner from '../../components/ButtonSpinner';
import { userLogin } from '../../services/UserServices';

export interface UserLogin {
  email: string;
  password: string;
}

const UserLogin = () => {
  const [loading, setLoading] = useState(false);
  const schemaValidation = yup.object({
    email: yup.string().required('Username is required!'),
    password: yup.string().required('Password is required!'),
  });

  const handleSubmit = async (values: UserLogin) => {
    try {
      setLoading(true);
      const response = await userLogin(values);
      await AsyncStorage.setItem('@RecicloApp:pushToken', response.data.token);
      Actions.push('register');
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }

    console.log(values);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values: UserLogin) => handleSubmit(values)}
      validationSchema={schemaValidation}
      validateOnBlur={false}>
      {props => (
        <ScrollView>
          <Input
            style={styles.input}
            size="medium"
            label="Email"
            placeholder="Email"
            value={props.values.email}
            onBlur={props.handleBlur('email')}
            onChangeText={props.handleChange('email')}
            status={props.errors.email ? 'danger' : 'basic'}
          />

          {props.errors.email ? (
            <Text status="danger" style={styles.error}>
              {props.errors.email}
            </Text>
          ) : null}

          <Input
            style={styles.input}
            placeholder="Password"
            label="Password"
            size="medium"
            secureTextEntry={true}
            status={props.errors.password ? 'danger' : 'basic'}
            onChangeText={props.handleChange('password')}
            onBlur={props.handleBlur('password')}
            value={props.values.password}
          />

          {props.errors.password ? (
            <Text status="danger" style={styles.error}>
              {props.errors.password}
            </Text>
          ) : null}

          <Button
            size="small"
            appearance="outline"
            disabled={loading}
            accessoryLeft={() => <ButtonSpinner isLoading={loading} />}
            onPress={props.handleSubmit}
            style={{ width: 150, alignSelf: 'center', marginTop: 30 }}>
            CONTINUE
          </Button>
          <Layout style={styles.line}>
            <Text style={styles.orText}>OR</Text>
          </Layout>
          <Button
            size="small"
            appearance="outline"
            style={styles.signUpText}
            status="primary"
            onPress={() => Actions.push('register')}>
            SIGN UP!
          </Button>
        </ScrollView>
      )}
    </Formik>
  );
};

export default UserLogin;
