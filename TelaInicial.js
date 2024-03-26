// TelaInicial.js
import React from 'react';
import { View, Text, Button, ImageBackground, Image, TouchableHighlight } from 'react-native';
import estilozin from './style/style.js';
import Menu from './Menu';

function TelaInicial({ navigation }) {
  return (
    <View style={estilozin.main}>
      <ImageBackground source={require('./assets/gif.gif')} resizeMode='cover' style={estilozin.bg}>
      <Menu></Menu>
      </ImageBackground>
    </View>
  );
}
export default TelaInicial;
