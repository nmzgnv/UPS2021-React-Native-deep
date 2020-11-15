import React from 'react';
import MainButton from './MainButton';
import styles from '../commonStyles';
import { View, Text, TextInput, } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
    const navigation = useNavigation();
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
            <MainButton title="Login" onPress={() => navigation.navigate('Tasks')} />
        </View>
    )
}

export default LoginScreen;
