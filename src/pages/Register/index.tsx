import { Input, Layout, Text } from "@ui-kitten/components"
import { Formik } from "formik";
import React from 'react';
import { ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from '../../styles/colors'
import styles from "./styles";


const Register = () => {
    return(
        <Layout style={{backgroundColor: colors.primary, flex: 1}}>
            <KeyboardAwareScrollView>
                <Formik 
                initialValues={{}}
                onSubmit={()=>console.log('')}>
                    <Layout style={styles.containerForm}>
                        <ScrollView>
                            <Input></Input>
                        </ScrollView>
                    </Layout>
                </Formik>
            </KeyboardAwareScrollView>
        </Layout>
    )
}

export default Register