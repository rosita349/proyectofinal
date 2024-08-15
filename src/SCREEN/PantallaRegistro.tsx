
import React, { useState } from 'react';
import { Text, View, Alert, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { InputComponent } from '../COMPONENT/InputComponent';
import { ButtonComponent } from '../COMPONENT/ButtonComponent';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { User } from '../NAVEGATION/StackNavegador';


interface Props {
  users: User [];
  handleAddUser: (user: User) => void; 
}
interface FormSe {
  celular: string;
  nombre: string;
  correo: string;
  contraseña: string;
}

export const PantallaRegistro = ({ users, handleAddUser }: Props) => {
  const [formSe, setFormSe] = useState<FormSe>({
    celular: '',
    nombre: '',
    correo: '',
    contraseña: ''
  });

  const [hiddenContraseña, setHiddenContraseña] = useState<boolean>(true);

  const navigation = useNavigation();

  const handleSetValues = (name: string, value: string) => {
    setFormSe((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUp = () => {
    if (!formSe.celular || !formSe.nombre || !formSe.correo || !formSe.contraseña) {
      Alert.alert(
        'ERROR',
        'POR FAVOR, INGRESE VALORES EN TODOS LOS CAMPOS!'
      );
      return;
    }
     //Validar que no se registre un usuario que ya se encuentre en el arreglo
     if (verifyUser() != null) {
      Alert.alert(
          'Error',
          'El usuario ya se encuentra registrado!'
      );
      return;
  }
   //Registrar nuevo usuario
        //Obtener el id de los usuarios
        const getIdUsers = users.map(user => user.id); //[1,2]
        //Obtener el nuevo id del n uevo usuario
        const getNewId = Math.max(...getIdUsers) + 1;
        //Generar la información del nuevo usuario - nuevo objeto
        const newUser:User= {
            id: getNewId,
            correo: formSe.correo,
            contraseña: formSe.contraseña,

        }
        //Agregar el nuevo usuario al arreglo
        handleAddUser(newUser);
        Alert.alert(
            'Felicitaciones',
            'Registro existoso!'
        );
        //Regreso a la anterior pantalla
        navigation.goBack();
        //console.log(formRegister);
    }
       //función verificar si el usuario está registrado
       const verifyUser = () => {
        const existUser = users.filter(user => user.correo === formSe.correo)[0];
        return existUser;
    }

  return (
    <View >
      <Text >Ice Cream</Text>
      <Text >Fresh and Delicious</Text>

      <InputComponent
         placeholder='Celular'
         handleSetValues={handleSetValues}
         name='Celular'
      />
      <InputComponent
         placeholder='Nombre'
         handleSetValues={handleSetValues}
         name='Nombre' />
      <InputComponent
        placeholder='Correo'
        handleSetValues={handleSetValues}
        name='Correo' />
      
      <InputComponent
      placeholder='Contraseña'
      handleSetValues={handleSetValues}
      name='CONTRASEÑA'
      isPassword={hiddenContraseña}
      hasIcon={true}
      setHiddenContraseña={() => setHiddenContraseña(!hiddenContraseña)} />
      

      <ButtonComponent textButton='Registrar' onPress={handleSignUp}  />
    </View>
  );
};

const styles = StyleSheet.create({
 
});
