import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Inicio from './views/Inicio'
import Nosotros from './views/Nosotros'

const Stack = createStackNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#F4511E'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen
            name="Inicio"
            component={Inicio}
          />
          <Stack.Screen
            name="Nosotros"
            component={Nosotros}
            options={({ route }) => ({
              title: route.params.clientId
            })}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
};


export default App;
