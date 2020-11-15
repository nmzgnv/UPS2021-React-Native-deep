import React, { useState } from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Task from './Task'
import styles, { textStyleParent } from '../commonStyles';
import Circlebutton from './CircleButton'
import ListItem from './ListItem'
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';


const TaskListScreen = () => {
    const [taskItems, setTaskItems] = useState(() => [
        new Task(uuid(), 'Do a workout', new Date(2020, 1)),
        new Task(uuid(), 'Study english', new Date(2020, 6, 30)),
        new Task(uuid(), 'JINGU-BEST-JINGU-BEST-JINGU-BEST-JINGU-BEST', new Date(2021, 7, 5)),
    ])

    const addTaskItem = (text) => {
        if (text.length > 0){
            setTaskItems([
                ...taskItems, 
                new Task(uuid(), text, new Date())
            ])
        }
    }

    const navigation = useNavigation();
    const renderItem = ({ item, index }) => (
        <ListItem title={item.name} date={item.date} side={index % 2 == 0 ? 'flex-start' : 'flex-end'} />
    );

    return (
        <View style={[extendedStyles.container, { paddingBottom: 15 }]}>
            <Text style={[extendedStyles.header, { marginBottom: 0, }]}>Tasks</Text>
            <View style={extendedStyles.taskCounter}>
                <Text style={[extendedStyles.h2, extendedStyles.taskCounterText]}>10</Text>
            </View>
            <FlatList style={extendedStyles.taskList} data={taskItems}
                renderItem={renderItem} keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
            </FlatList>
            <Circlebutton onPress={() => navigation.navigate('New Task', addTaskItem)}></Circlebutton>
        </View>
    )
}

const newStyles = StyleSheet.create({
    taskList: {
        flex: 1,
    },
    taskCounter: {
        backgroundColor: '#FFE3D3',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: -34,
        marginTop: -10,
        borderBottomStartRadius: 13,
        borderTopStartRadius: 13,
        paddingVertical: 13,
        paddingHorizontal: 25,
        width: 'auto',
        height: 50,
    },
    taskCounterText: {
        fontSize: 18,
        lineHeight: 21,
    }
})

const extendedStyles = StyleSheet.flatten([styles, newStyles])

export default TaskListScreen;
