const { StyleSheet } = require("react-native");

const style = StyleSheet.create({
    error: {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 12
    },
    input: {
        width: 300,
        marginTop: 5,
    }, 
    line: {
        borderBottomColor: '#A0A0A0',
        borderBottomWidth: 1,
        marginVertical: 25,
    },
    signUpText: {
        display: 'flex',
        alignSelf: 'center', 
        fontSize: 14, 
        fontWeight: 'bold',
        margin: 10
    },
    orText: {
        display: 'flex',
        alignSelf: 'center',
        backgroundColor:'white',
        margin: 'auto'
    }
})

export default style;