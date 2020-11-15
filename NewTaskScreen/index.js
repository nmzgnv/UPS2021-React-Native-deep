import React from 'react';

import {View, Text, StyleSheet, TextInput,} from 'react-native';

import MainButton from '../loginScreen/MainButton';
import styles from '../commonStyles';


const NewTaskScreen = () => {
    const [taskText, onChangeTaskText] = React.useState('Enter task name...');
    return (
        <View style={styles.container}>
            <Text style={styles.header}>New task </Text>
            <Text style={styles.h2}>Task name</Text>
            <TextInput 
                style={[styles.textInput, {height: 120, paddingVertical:10, textAlignVertical:'top'}]}
                onChangeText={text => onChangeTaskText(text)}
                value={taskText}
                clearTextOnFocus={true}
                multiline={true}
            />
            <MainButton title="Create" />
        </View>
    )
}


export default NewTaskScreen;
