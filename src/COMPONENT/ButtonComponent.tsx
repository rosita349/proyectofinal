import React from 'react'
import { Text, TouchableOpacity, Button } from 'react-native';
import { styles } from '../THEME/Estilos'
 

//interFace -Prosp
interface Props {
    textButton: string;
    onPress:()=>void;

}

export const ButtonComponent = ({textButton, onPress}:Props) => {



  return (
    <TouchableOpacity 
    onPress={onPress}
    style={styles.buttonInicio}>
        <Text>{textButton}</Text>
    </TouchableOpacity>
  )
}
