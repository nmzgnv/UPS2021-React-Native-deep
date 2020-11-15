import React from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Task from './Task'
import styles from '../commonStyles';
import Circlebutton from './CircleButton'
import ListItem from './ListItem'

var taskList = [
    new Task('0', 'Do a workout', new Date(2021, 11, 3)),
    new Task('1', 'Study english', new Date(2021, 1, 1)),
    new Task('2', 'JINGU-BEST-JINGU-BEST-JINGU-BEST-JINGU-BEST-JINGU-BEST-JINGU-BEST-JINGU-BEST', new Date(2021, 1, 1)),
    new Task('3', '393', new Date(2021, 1, 5)),
    new Task('4', '390', new Date(2021, 1, 1)),
    new Task('5', '372', new Date(2021, 1, 1)),
];

const TaskListScreen = () => {
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
            <FlatList style={extendedStyles.taskList} data={taskList}
                renderItem={renderItem} keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
            </FlatList>
            <Circlebutton onPress={() => navigation.navigate('New Task')}></Circlebutton>
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
