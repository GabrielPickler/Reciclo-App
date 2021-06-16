import React, { useState } from 'react';
import ButtonSpinner from '../../components/ButtonSpinner';
import { ScrollView } from 'react-native';
import styles from './styles';

import { Button, Input, Text, Layout } from '@ui-kitten/components';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Actions } from 'react-native-router-flux';
import api from '../../../Axios.config';

interface Values {
  email: string;
  password: string;
}

const UserLogin = () => {
  const [loading, setLoading] = useState(false);
  const schemaValidation = yup.object({
    email: yup.string().required('Username is required!'),
    password: yup.string().required('Password is required!'),
  });

  const handleSubmit = async (values: Values) => {
    try {
      setLoading(true);
      await api.post('/useraccount/session', values);
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
      onSubmit={(values: Values) => handleSubmit(values)}
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
