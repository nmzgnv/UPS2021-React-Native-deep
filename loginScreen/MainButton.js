import React from 'react';

import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const MainButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={mainButtonStyles.Container}>
        <Text style={mainButtonStyles.Text}>{title}</Text>
    </TouchableOpacity>
);


const mainButtonStyles = StyleSheet.create({
    Container: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        elevation: 1,

        backgroundColor: "#FFE3D3",
        borderRadius: 10,
        paddingVertical: 17,
        paddingHorizontal: 17,
        marginTop: 'auto'
    },
    Text: {
        fontSize: 18,
        fontWeight: 900,
        lineHeight: 21,
        fontFamily: 'Roboto',
        color: "#323232",
        fontWeight: "bold",
        alignSelf: "center"
    }
});

export default MainButton
