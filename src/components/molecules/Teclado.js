import React from 'react';
import { View, StyleSheet } from 'react-native';
import Boton from '../atoms/Boton';

const buttons = [
  ['7','8','9','/'],
  ['4','5','6','*'],
  ['1','2','3','-'],
  ['0','=','+','C']
];

const Teclado = ({ onPress }) => {
  return (
    <View>
      {buttons.map((row, i) => (
        <View key={i} style={styles.row}>
          {row.map((btn) => (
            <Boton key={btn} label={btn} onPress={onPress} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  }
});

export default Teclado;