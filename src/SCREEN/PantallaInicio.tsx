
import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { styles } from '../THEME/Estilos';
import { InputComponent } from '../COMPONENT/InputComponent';
import { ButtonComponent } from '../COMPONENT/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { User } from '../NAVEGATION/StackNavegador';

//interface - users
interface Props {
  users: User[];
  handleAddUser: (user: User) => void;

}
// interfas- objeto
interface FormInicio {
  correo: string;
  contraseña: string;
}
interface Props {

  users: User[];
  handleAddUser: (user: User) => void;
}

export const PantallaInicio = ({ users }: Props) => {

  //hook useState: manipular el estado del formulario
  const [formInicio, setFormInicio] = useState<FormInicio>({
    correo: '',
    contraseña: ''

  });
  // hook useState: permitir que se haga vasible/ no visibles el contenido del password
  const [hiddenPaswword, setHiddenPaswword] = useState<boolean>(true);

  //hook useNavigation: navega de una pantalla a otra
  const navigation=useNavigation();

  //funcion para actualizar el estado del formulario
  const handleSetValues = (name: string, value: string) => {
    //console.log(name);
    //console.log(value);
    // cambiar el estado del formInicio
    //...operador de propagacion | spred: crea una copia del objeto

    setFormInicio({ ...formInicio, [name]: value });
  }
  //funcion para iniciar secion
  const handleSingnIn = () => {
    // validadndo que los campos esten llenos 
    if (formInicio.correo === '' || formInicio.contraseña === '') {
      Alert.alert(
        'ERROR',
        'POR FAVOR, INGRESE VALORES EN TODOS LOS CAMPOS!'
      );
      return;
    }
    // validadndo que el ususarion exista 
    if (!verifyUser()) {
      Alert.alert(
        'Error',
        'correo y/o contraseña incorrecta'
      );
      return;
    }

    console.log(formInicio);
  }


  // funcion que verifica si existe el correo y contraseña (usuario)
  const verifyUser = (): User => {
    const existUser = users.filter(user => user.correo === formInicio.correo && user.contraseña === formInicio.contraseña)[0];
    return existUser;



  }

  return (
    <View style={styles.Container}>
      <Text style={styles.textTitulo}>Ice Cream</Text>
      <Text style={styles.textSubT}>Fresh and Delicious</Text>
      <InputComponent
        placeholder='Correo' handleSetValues={handleSetValues} name='Correo' />
      <InputComponent
        placeholder='Contraseña'
        handleSetValues={handleSetValues}
        name='Contraseña'
        isPassword={hiddenPaswword}
        hasIcon={true}
        setHiddenContraseña={() => setHiddenPaswword(!hiddenPaswword)} />

      <ButtonComponent textButton='iniciar' onPress={handleSingnIn} />
      <TouchableOpacity
        onPress={() => navigation.dispatch(CommonActions.navigate({name:'PantallaRegistro'}))}>
        <Text style={styles.buttonCuentaNueva}>¿Crear nueva Cuenta?</Text>
      </TouchableOpacity>

    </View>
  );
} 
