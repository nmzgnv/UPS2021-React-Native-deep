import React from 'react';
import { View, Text, TextInput, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainButton from '../loginScreen/MainButton';
import styles from '../commonStyles';


const NewTaskScreen = ({ route, nav }) => {
    console.disableYellowBox = true;
    const addNewTask = route.params;
    const [taskText, onChangeTaskText] = React.useState('');
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>New task </Text>
            <Text style={styles.h2}>Task name</Text>
            <TextInput
                style={[styles.textInput, { height: 120, paddingVertical: 10, textAlignVertical: 'top' }]}
                onChangeText={text => onChangeTaskText(text)}
                value={taskText}
                clearTextOnFocus={true}
                multiline={true}
                placeholder='Enter task name...'
            />
            <MainButton title="Create"
                onPress={() => { 
                    addNewTask(taskText);
                    navigation.navigate('Tasks'); 
                }}
            />
        </View>
    )
}


export default NewTaskScreen;
