
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Image, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { styles } from '../THEME/Estilos';


interface Props extends StackScreenProps<any,any>{}

export const PantallaPrincipal= ({navigation}:Props) => {
  return (
    <View>
        <ImageBackground>
        <Image style={styles.image}
        source={{uri:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ice-cream-parlor-ad-flyer-template-design-c7a552033996d6e21c2d2cf0aced9495_screen.jpg?ts=1637011545' }}
      />
       <TouchableOpacity
     onPress={() => navigation.navigate('PantallaInicio')}> 
      <Text style={styles.button}>Ingresar</Text> 
      </TouchableOpacity>
      </ImageBackground>
    </View>
  )
  }