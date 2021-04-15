import { Input, Layout, Text, Button } from "@ui-kitten/components"
import { Formik } from "formik";
import * as yup from 'yup';
import styles from './styles'
import ButtonSpinner from '../ButtonSpinner'

import React, { useState } from 'react';

interface Form {
    name: String,
    username: String,
    email: String,
    password: String,
    confirmPassword: String
}

const RegisterForm = () => {
    const [loading, setLoading] = useState(false)
    const schemaValidation = yup.object({
        name: yup.string().required('Name is required!').trim(),
        username: yup.string().required('Username is required!').trim(),
        password: yup.string().required('Password is required!').trim(),
        email: yup.string().email().required('Email is required!').trim(),
        confirmPassword: yup
        .string()
        .trim()
        .required('Password is required!')
        .test('password-do-not-match', 'Passwords do not match!', function (value) {
            let { password } = this.parent;
            return value === password
        })
    })

    return (
        <Formik 
        initialValues={{name: '', username: '', password: '', confirmPassword: '', email: ''}}
        onSubmit={()=>console.log('')}
        validationSchema={schemaValidation}>
            {(props) => (
                    <Layout style={styles.containerForm}>
                        <Text style={styles.header}>Sign in</Text>

                        <Input 
                        style={{marginBottom: 10}}
                        label='Name'/>

                        <Input 
                        style={{marginBottom: 10}}
                        label='Username'/>

                        <Input 
                        style={{marginBottom: 10}}
                        label='Email'/>

                        <Input 
                        style={{marginBottom: 10}}
                        label='Password'/>

                        <Input 
                        style={{marginBottom: 10}}
                        label='Confirm Password'/>

                        <Button 
                        size='small'
                        appearance='outline'
                        disabled={loading}
                        accessoryLeft={() => <ButtonSpinner isLoading={loading}/>}
                        style={{width: 150, alignSelf: 'center', marginTop: 20}}>
                            SIGN IN
                        </Button>

                    </Layout>
                )
            }
            
        </Formik>
    )
}

export default RegisterForm