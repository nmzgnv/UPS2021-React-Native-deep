import React from 'react';

import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { textStyleParent } from '../commonStyles';

const TaskCompleteButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={taskButtonStyles.Container}>
        <Text style={taskButtonStyles.Text}>{title}</Text>
    </TouchableOpacity>
);


const taskButtonStyles = StyleSheet.create({
    Container: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        elevation: 3,

        backgroundColor: "#FFFFFF",
        borderRadius: 0,
        paddingVertical: 9,
        paddingHorizontal: 25,
        marginTop: 'auto'
    },
    Text: {
        color: "#C3FEDA",
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 14.06,
        alignSelf: "center"
    }
});

export default TaskCompleteButton
