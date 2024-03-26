// TelaScroll.js
import React from 'react';
import { View, Text, Button, ImageBackground, Image, TouchableHighlight, ScrollView } from 'react-native';
import estilozin from './style/style.js';
import Menu from './Menu';

function TelaScroll({ navigation }) {
  return (
    <View style={estilozin.main}>
      <ImageBackground source={require('./assets/gif.gif')} resizeMode='cover' style={estilozin.bg}>
        <ScrollView style={estilozin.scrolzin}>
            <Text style={estilozin.textscroll}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</Text>
        </ScrollView>
      <Menu></Menu>
      </ImageBackground>
    </View>
  );
}
export default TelaScroll;
