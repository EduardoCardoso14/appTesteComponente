import { StyleSheet } from "react-native";

export default StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg:{
        width: '100%',
        height: '100%',
        flex: 1 ,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textu:{
        color: 'white',
    },
    menu:{
        position: 'absolute',
        borderWidth: 1,
        borderColor: 'white',
        width: '102%',
        height: 50,
        bottom: -2,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent: 'center',
        gap: 40,
    },
    iconmenu:{
        width: 30,
        height: 30,
        top: 10
    },
    scrolzin:{
        position: 'absolute',
        backgroundColor: 'white',
        width: '80%',
        height: '50%',
        borderWidth: 7,
        borderRadius: 10,
        borderColor: 'gray',
        padding: 20
    },
    textscroll:{
        fontSize: 50,
    }
});