import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import TaskCompleteButton from './TaskCompleteButton'
import { textStyleParent } from '../commonStyles';


function formatDate(date) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return date.getDate() + ' ' + months[date.getMonth() % 12] + ' ' + date.getFullYear();
}


const ListItem = (props) => (
    <View style={[listStyles.Item, { alignSelf: props.side }]}>
        <Text style={listStyles.ItemTitle}>{props.title}</Text>
        <Text style={listStyles.ItemDataText}>
            {formatDate(props.date)}
        </Text>
        <TaskCompleteButton title='Done'></TaskCompleteButton>
    </View>
);


const listStyles = StyleSheet.create({
    Item: {
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
    ItemTitle: {
        ...textStyleParent,
        marginVertical: 6,
        fontSize: 21,
        lineHeight: 24.61,
    },
    ItemDataText: {
        color: "#999999",
        fontSize: 10,
        lineHeight: 11.72,
        marginBottom: 29,
    },
})

export default ListItem