import { StyleSheet } from 'react-native';


export const textStyleParent = {
    color: '#323232',
    fontFamily: 'Roboto',
    fontWeight: "700",
};


styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 34,
        backgroundColor: '#FFFFFF',
    },
    header: {
        marginTop: 31,
        textAlign: 'left',
        marginBottom: 80,
        ...textStyleParent,
        fontSize: 48,
        lineHeight: 56.25,
    },
    h2: {
        ...textStyleParent,
        fontSize: 21,
        lineHeight: 24.61,
    },
    textInput: {
        shadowColor: '#000000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
        marginTop: 20,
        height: 61,
        borderColor: 'gray',
        borderWidth: 0,
        borderRadius: 10,
        paddingVertical: 23,
        paddingHorizontal: 15,
        color: "#999999",
        marginVertical: 29,
    },
});


export default styles;