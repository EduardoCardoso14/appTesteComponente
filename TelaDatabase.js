// TelaDatabase.js
import React from 'react';
import { View, Text, Button, ImageBackground, Image, TouchableHighlight } from 'react-native';
import estilozin from './style/style.js';
import Menu from './Menu';

function TelaDatabase({ navigation }) {
  /*var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'q1w2e3',
    database: 'testereact'
  });

  connection.connect();

  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
   
  connection.end();*/
  return (

    <View style={estilozin.main}>
      <ImageBackground source={require('./assets/gif.gif')} resizeMode='cover' style={estilozin.bg}>
        <Text>bomasdasd</Text>
        <Menu></Menu>
      </ImageBackground>
    </View>
  );
}
export default TelaDatabase;
