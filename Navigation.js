// Navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './TelaInicial';
import TelaDetalhes from './TelaDetalhes';
import TelaScroll from './TelaScroll';
import TelaDatabase from './TelaDatabase';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial}
        options={{
          title: 'Tela Inicial',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'black' }
        }}  />
        <Stack.Screen name="TelaDetalhes" component={TelaDetalhes}
        options={{
          title: 'Tela Detalhes',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'black' }
        }} />
        <Stack.Screen name="TelaScroll" component={TelaScroll}
        options={{
          title: 'Tela Scroll',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'black' }
        }} />
        <Stack.Screen name="TelaDatabase" component={TelaDatabase}
        options={{
          title: 'Tela DataBase',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'black' }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;