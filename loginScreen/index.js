import React from 'react';

import {
    Button,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { circle } from 'react-native/Libraries/Animated/src/Easing';
import { create } from 'react-test-renderer';

const MainButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={mainButtonStyles.Container}>
        <Text style={mainButtonStyles.Text}>{title}</Text>
    </TouchableOpacity>
);

const LoginScreen = () => {
    const [email, onChangeEmail] = React.useState('Enter email...');
    const [password, onChangePassword] = React.useState('Enter password...');
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to a todo app </Text>
            <Text style={styles.formHeader}>Email</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeEmail(text)}
                value={email}
            />
            <Text style={styles.formHeader}>Password</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={text => onChangePassword(text)}
                value={password}
            />
            <MainButton title="Login" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 34,
        backgroundColor: '#FFFFFF',
    },
    welcomeText: {
        marginTop: 31,
        fontSize: 48,
        lineHeight: 56.25,
        color: '#323232',
        fontFamily: 'Roboto',
        fontWeight: "700",
        textAlign: 'left',
        marginBottom: 106,
    },
    formHeader: {
        fontSize: 21,
        lineHeight: 24.61,
        color: '#323232',
        fontFamily: 'Roboto',
        fontWeight: "700",
    },
    textInput: {
        shadowColor: '#000000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
        //box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
        marginTop: 20,
        height: 61,
        borderColor: 'gray',
        borderWidth: 0,
        borderRadius: 10,
        paddingVertical: 23,
        paddingHorizontal: 15,
        color: "#999999",
        marginVertical: 29,
    },
});

const mainButtonStyles = StyleSheet.create({
    Container: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        elevation: 1,

        backgroundColor: "#FFE3D3",
        borderRadius: 10,
        paddingVertical: 17,
        paddingHorizontal: 17,
        marginTop: 'auto'
    },
    Text: {
        fontSize: 18,
        fontWeight: 900,
        lineHeight: 21,
        fontFamily: 'Roboto',
        color: "#323232",
        fontWeight: "bold",
        alignSelf: "center"
    }
});


export default LoginScreen;
