import React from 'react';
import {Text, View } from 'react-native';

export default function Contato({route}) {
    return (
        <View>
            <Text>  O Nome do gerente é: {route.params.nome2}  </Text>
        </View>
    );
}