import React from 'react';
import {Text, View , Button} from 'react-native';
 
export default function Home({ navigation }) {  
    return (
        <View>
            <Text> Home </Text>
             <Button
             title="Sobre"
             onPress={ () => navigation.navigate('Sobre', {nome: 'Lucas'} )}

             />

             <Button
             title="Muda titulo"
             onPress={ () => navigation.setOptions({title : 'INICIO'})}

             />
        </View>

    );
}