import React, { useState } from 'react';
import { Actions } from 'react-native-router-flux';

import { Input, Layout, Text, Button } from '@ui-kitten/components';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as yup from 'yup';

import styles from './styles';
import ButtonSpinner from '../ButtonSpinner';
import { userRegister } from '../../services/UserServices';

export interface RegisterForm {
  name: String;
  username: String;
  email: String;
  password: String;
  confirmPassword: String;
}

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const schemaValidation = yup.object({
    name: yup.string().required('Name is required!').trim(),
    username: yup.string().required('Username is required!').trim(),
    password: yup
      .string()
      .required('Password is required!')
      .trim()
      .test(
        'password-do-not-match',
        'Passwords do not match!',
        function (value) {
          let { confirmPassword } = this.parent;
          return value === confirmPassword;
        },
      ),
    email: yup
      .string()
      .email('Email must be a valid email!')
      .required('Email is required!')
      .trim(),
    confirmPassword: yup
      .string()
      .trim()
      .required('Password is required!')
      .test(
        'password-do-not-match',
        'Passwords do not match!',
        function (value) {
          let { password } = this.parent;
          return value === password;
        },
      ),
  });

  const handleSubmit = async (values: RegisterForm) => {
    setLoading(true);
    try {
      const response = await userRegister(values);
      await AsyncStorage.setItem('@RecicloApp:pushToken', response.data.token);
      //TODO: Enviar para o menu
      Actions.push('login');
    } catch (error) {
      console.log(error.response);
      console.log(error);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
      }}
      onSubmit={values => handleSubmit(values)}
      validationSchema={schemaValidation}
      validateOnBlur={false}>
      {props => (
        <Layout style={styles.containerForm}>
          <Text style={styles.header}>Sign up</Text>

          <Input
            label="Name"
            value={props.values.name}
            onBlur={props.handleBlur('name')}
            onChangeText={props.handleChange('name')}
            status={props.errors.name ? 'danger' : 'basic'}
          />

          {props.errors.name ? (
            <Text status="danger" style={styles.error}>
              {props.errors.name}
            </Text>
          ) : null}

          <Input
            value={props.values.username}
            onBlur={props.handleBlur('username')}
            onChangeText={props.handleChange('username')}
            status={props.errors.username ? 'danger' : 'basic'}
            label="Username"
          />

          {props.errors.name ? (
            <Text status="danger" style={styles.error}>
              {props.errors.username}
            </Text>
          ) : null}

          <Input
            label="Email"
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
            label="Password"
            value={props.values.password}
            onBlur={props.handleBlur('password')}
            onChangeText={props.handleChange('password')}
            status={props.errors.password ? 'danger' : 'basic'}
          />

          {props.errors.password ? (
            <Text status="danger" style={styles.error}>
              {props.errors.password}
            </Text>
          ) : null}

          <Input
            label="Confirm Password"
            value={props.values.confirmPassword}
            onBlur={props.handleBlur('confirmPassword')}
            onChangeText={props.handleChange('confirmPassword')}
            status={props.errors.confirmPassword ? 'danger' : 'basic'}
          />

          {props.errors.confirmPassword ? (
            <Text status="danger" style={styles.error}>
              {props.errors.confirmPassword}
            </Text>
          ) : null}

          <Button
            size="small"
            appearance="outline"
            disabled={loading}
            onPress={props.handleSubmit}
            accessoryLeft={() => <ButtonSpinner isLoading={loading} />}
            style={{ width: 150, alignSelf: 'center', marginTop: 20 }}>
            SIGN IN
          </Button>
        </Layout>
      )}
    </Formik>
  );
};

export default RegisterForm;
