

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView

} from 'react-native-safe-area-context';
import {CountScreen} from './Components';
import React from 'react';
import { styles } from './App.style';

let count: number=0;

type AppProps = {

};

const handleOnPress = (value: number) => {
  console.log("Press Button");
  count ++;
  console.log(count);
};


export default function App() {


  const label= "Hello World";
  const name=" Samuel";

  return (

    <SafeAreaView style={{flex:1}}>
      <CountScreen label="Calculadora"
    OnPress={() => console.log("Botón presionado")} />
        
      </SafeAreaView>
 
  );
};
