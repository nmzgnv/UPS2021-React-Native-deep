import React from 'react';

import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { textStyleParent } from '../commonStyles';
import Task from './Task'
import TaskCompleteButton from './TaskCompleteButton'
import styles from '../commonStyles';
import Circlebutton from './CircleButton'

var taskList = [
    new Task('0', 'Do a workout', new Date(2021, 11, 3)),
    new Task('1', 'Study english', new Date(2021, 1, 1)),
    new Task('2', 'JINGU-BEST-JINGU-BEST-JINGU-BEST-JINGU-BEST-JINGU-BEST-JINGU-BEST-JINGU-BEST', new Date(2021, 1, 1)),
    new Task('3', '393', new Date(2021, 1, 5)),
    new Task('4', '390', new Date(2021, 1, 1)),
    new Task('5', '372', new Date(2021, 1, 1)),
];


function formatDate(date) {
    var months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return date.getDay().toString() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
}

const ListItem = (props) => (
    <View style={[extendedStyles.listItem, {alignSelf: props.side}]}>
        <Text style={extendedStyles.listItemTitle}>{props.title}</Text>
        <Text style={extendedStyles.listItemDataText}>
            {formatDate(props.date)}
        </Text>
        <TaskCompleteButton title='Done'></TaskCompleteButton>
    </View>
);


const TaskListScreen = () => {
    const renderItem = ({ item, index }) => (
        <ListItem title={item.name} date={item.date} side={index % 2 == 0  ? 'flex-start' : 'flex-end'}/>
    );

    return (
        <View style={[extendedStyles.container, {paddingBottom: 15}]}>
            <Text style={[extendedStyles.header, { marginBottom: 0, }]}>Tasks</Text>
            <View style={extendedStyles.taskCounter}>
                <Text style={[extendedStyles.h2, extendedStyles.taskCounterText]}>10</Text>
            </View>
            <FlatList style={extendedStyles.taskList} data={taskList}
                renderItem={renderItem} keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
            </FlatList>
            <Circlebutton></Circlebutton>
        </View>
    )
}

const newStyles = StyleSheet.create({
    taskList: {
        flex: 1,
    },
    listItem: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        elevation: 3,
        backgroundColor: 'white',
        padding: 10,
        width: 180,
        height: 'auto',
        marginHorizontal: 3,
        marginVertical: 11.5,
        borderRadius: 9,
    },
    listItemTitle: {
        ...textStyleParent,
        marginVertical: 6,
        fontSize: 21,
        lineHeight: 24.61,
    },
    listItemDataText: {
        color: "#999999",
        fontSize: 10,
        lineHeight: 11.72,
        marginBottom: 29,
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
