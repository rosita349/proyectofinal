import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react'
import { PantallaPrincipal } from '../SCREEN/PantallaPrincipal';
import { PantallaInicio } from '../SCREEN/PantallaInicio';
import { PantallaRegistro } from '../SCREEN/PantallaRegistro';
import { PantallaProductos } from '../SCREEN/PantallaProductos';


// interfas- arreglo de objwetos 
export interface User {
  id: number;
  correo: string;
  contraseña: string;
}
const Stack = createStackNavigator();

export const StackNavegador = () => {

  const users: User[] = [
    { id: 1, correo: 'quezadarosita76@gmail.com', contraseña: '123456' },
    { id: 2, correo: 'desarrollamos100@gmail.com', contraseña: '24680' }

  ]
  const [listUsers, setListUsers] = useState(users);

  const handleAddUser = (user: User) => {
    //operador propagación... : sacar copia del contenido del arreglo
    //Agregar le nuevo usario que reciba como parámetro
    setListUsers([...listUsers, user]);
  }

    return (
      <Stack.Navigator >
        <Stack.Screen
          name="PantallaPrincipal"
          options={{ headerShown: false }} component={PantallaPrincipal} />
        <Stack.Screen
          name="PantallaInicio"
          options={{ headerShown: false }}
          children={() => <PantallaInicio users={listUsers} handleAddUser={handleAddUser} />} />
        
         <Stack.Screen
         name="PantallaRegistro"
         options={{ headerShown: false }}
         children={() => <PantallaRegistro users={listUsers} handleAddUser={handleAddUser} />} />
       <Stack.Screen

          name="PantallaProductos"
          options={{ headerShown: false }}
          children={() => <PantallaRegistro users={listUsers} handleAddUser={handleAddUser} />} />
        <Stack.Screen name="PantallaProductos" component={PantallaProductos} />
      </Stack.Navigator>
    );
  }

