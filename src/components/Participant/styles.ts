import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,

    },
    name: {
        color: '#FFFFFF',
        flex: 1,
        fontSize: 16,
        marginLeft: 16
    }, 
    buttonText: {
        color: '#FFFFFF',
        fontSize: 24
      },
      button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center'
      },

});