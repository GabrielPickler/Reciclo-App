import React, { useState } from 'react';
import ButtonSpinner from '../../components/ButtonSpinner';
import { ScrollView } from 'react-native'
import styles from './styles'

import { Button, Input, Text, Layout, Autocomplete } from '@ui-kitten/components';
import { Formik  } from 'formik';
import * as yup from 'yup';
import { PropsService } from '@ui-kitten/components/devsupport';

interface Values {
    username: string,
    password: string
}

const UserLogin = () => {
    const [loading, setLoading] = useState(false)
    const schemaValidation = yup.object({
        username: yup.string().required('O campo usuário é obrigatório!'),
        password: yup.string().required('O campo senha é obrigatório!')
    })

    const handleSubmit = (values : Values) => {
        setLoading(true)
        console.log(values);
    }

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values: Values) => handleSubmit(values)}
            validationSchema={schemaValidation}>
                {(props) =>(
                    <ScrollView>
                        <Input
                        style={styles.input}
                        label='Username' 
                        placeholder='Username'
                        value={props.values.username}
                        status={props.errors.username ? 'danger' : 'basic'}
                        />

                        { props.errors.username ? 
                        <Text status='danger' style={styles.error}>{props.errors.username}</Text>
                        : null }

                        <Input
                        style={styles.input} 
                        placeholder='Password'
                        label='Password'
                        secureTextEntry={true}
                        status={props.errors.password ? 'danger' : 'basic'}
                        value={props.values.password}/>

                        { props.errors.password ? 
                        <Text status='danger' style={styles.error}>{props.errors.password}</Text>
                        : null }
                        
                        <Button 
                        size='small'
                        appearance='outline'
                        disabled={loading}
                        accessoryLeft={() => <ButtonSpinner isLoading={loading}/>}
                        onPress={props.handleSubmit}
                        style={{width: 150, alignSelf: 'center', marginTop: 10}}
                        >
                            CONTINUE
                        </Button>
                        <Layout style={styles.line}> 
                            <Text style={styles.orText}>OR</Text>
                        </Layout>
                        <Button
                        size='small'
                        appearance='outline' 
                        style={styles.signUpText}
                        status='primary'> 
                        SIGN UP!
                        </Button>
                    </ScrollView>
                )}
        </Formik>
    )
}

export default UserLogin;