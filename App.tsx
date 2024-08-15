
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StackNavegador } from './src/NAVEGATION/StackNavegador';




const App = () => {
  return (
    <NavigationContainer>
      <StackNavegador/>
      <StackNavegador/>
    </NavigationContainer>
  );
}

export default App;
