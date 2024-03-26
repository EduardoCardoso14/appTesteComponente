import React from 'react';
import { View, Text, Button, ImageBackground, Image, TouchableHighlight } from 'react-native';
import estilozin from './style/style.js';
import { useNavigation } from '@react-navigation/native';

function Menu() {
    const navigation = useNavigation();
    return (
        <View style={estilozin.menu}>
            <TouchableHighlight onPress={() => navigation.navigate('TelaInicial')}>
                <Image source={require('./assets/iconhome.png')} style={estilozin.iconmenu}></Image>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('TelaDetalhes')}>
                <Image source={require('./assets/icondesc.png')} style={estilozin.iconmenu}></Image>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('TelaScroll')}>
                <Image source={require('./assets/scroll.png')} style={estilozin.iconmenu}></Image>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('TelaDatabase')}>
                <Image source={require('./assets/iconbase.png')} style={estilozin.iconmenu}></Image>
            </TouchableHighlight>
            <Image source={require('./assets/iconleave.png')} style={estilozin.iconmenu}></Image>
        </View>
    );
}
export default Menu;   