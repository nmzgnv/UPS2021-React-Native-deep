import React from 'react';

import {View, Text, StyleSheet, TextInput,} from 'react-native';

import MainButton from './MainButton';
import styles from '../commonStyles';


const LoginScreen = () => {
    const [email, onChangeEmail] = React.useState('Enter email...');
    const [password, onChangePassword] = React.useState('Enter password...');
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to a todo app </Text>
            <Text style={styles.h2}>Email</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeEmail(text)}
                value={email}
            />
            <Text style={styles.h2}>Password</Text>
            <TextInput clearButtonMode='always'
                style={styles.textInput}
                onChangeText={text => onChangePassword(text)}
                value={password}
            />
            <MainButton title="Login" />
        </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'flex-start',
//         alignItems: 'stretch',
//         padding: 34,
//         backgroundColor: '#FFFFFF',
//     },
//     header: {
//         marginTop: 31,
//         fontSize: 48,
//         lineHeight: 56.25,
//         color: '#323232',
//         fontFamily: 'Roboto',
//         fontWeight: "700",
//         textAlign: 'left',
//         marginBottom: 80,
//     },
//     formHeader: {
//         fontSize: 21,
//         lineHeight: 24.61,
//         color: '#323232',
//         fontFamily: 'Roboto',
//         fontWeight: "700",
//     },
//     textInput: {
//         shadowColor: '#000000',
//         shadowOpacity: 0.08,
//         shadowOffset: { width: 0, height: 2 },
//         shadowRadius: 10,
//         elevation: 3,
//         backgroundColor: 'white',
//         //box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.08);
//         marginTop: 20,
//         height: 61,
//         borderColor: 'gray',
//         borderWidth: 0,
//         borderRadius: 10,
//         paddingVertical: 23,
//         paddingHorizontal: 15,
//         color: "#999999",
//         marginVertical: 29,
//     },
// });


export default LoginScreen;
