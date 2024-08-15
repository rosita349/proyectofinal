import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../THEME/Estilos';


export const BodyComponent = (props: any) => {
    //console.log(props);

    //hook useWindowDimension: tamaño de la pantalla
    const { height } = useWindowDimensions();
    return (
        <View style={{
            ...styles.contentBody,
            height: height * 0.88
        }}>
            {props.children}
        </View>
    )
}