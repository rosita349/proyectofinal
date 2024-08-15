import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { styles } from '../THEME/Estilos'
import Icon from 'react-native-vector-icons/MaterialIcons';
//interface - Props
interface Props {
   placeholder: string;
   //funcion props
   handleSetValues:(name:string, value: string)=>void;
   name: string; 
   isPassword?: boolean;// prop opcional
   hasIcon?:boolean;
   setHiddenContraseña?:() => void;   // prop funcion
   
}

 export const InputComponent = ({placeholder, handleSetValues, name,isPassword=false, hasIcon= false, setHiddenContraseña }:Props) => {
  return (
   <View>
      {
       (hasIcon)
       ?<Icon 
       name ='visibility'
        size={25}
         color='#0c0b0c' 
         onPress={setHiddenContraseña}
          style={styles.iconPassword}/>
      : null    
      }
     
       
   <TextInput
   placeholder={placeholder}
   keyboardType='default'
   onChangeText={(value)=>handleSetValues(name,value)}
   secureTextEntry={isPassword}
   style={styles.TextImput}
 />
 
   </View>

  )
}

