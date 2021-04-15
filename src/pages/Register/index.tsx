import { Layout } from "@ui-kitten/components"
import React from 'react';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import RegisterForm from '../../components/RegisterForm'
import colors from '../../styles/colors'
import styles from "./styles";

const Register = () => {
    return(
        <Layout style={{backgroundColor: colors.primary, flex: 1}}>
            <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Layout style={styles.container}>
                    <RegisterForm/>
                </Layout>
            </KeyboardAwareScrollView>
        </Layout>
    )
}

export default Register