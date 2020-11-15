import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { textStyleParent } from '../commonStyles';


const CircleButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={circleButtonStyles.Container}>
        <Text style={circleButtonStyles.plus}>+</Text>
    </TouchableOpacity>
);

const circleButtonStyles = StyleSheet.create({
    Container: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        elevation: 3,

        width: 51,
        height: 51,

        borderRadius: 25,
        backgroundColor: '#FFE3D3',
        justifyContent: 'center',

        position: 'absolute',
        bottom: 34,
        right: 20,
    },
    plus: {
        ...textStyleParent,
        fontSize: 34.2,
        lineHeight: 40.08,
        fontWeight: '700',
        textAlign: 'center',
    },
});

export default CircleButton
