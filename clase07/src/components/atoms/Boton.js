import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Boton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(label)}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: '#333',
    alignItems: 'center',
    borderRadius: 10
  },
  text: {
    color: '#fff',
    fontSize: 20
  }
});

export default Boton;