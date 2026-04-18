import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import Display from '../atoms/Display';
import Teclado from '../molecules/Teclado';

const Calculadora = () => {

  const [input, setInput] = useState('');

  useEffect(() => {
    console.log("Pantalla actualizada:", input);
  }, [input]);

  const handlePress = (value) => {

    if (value === 'C') {
      setInput('');
      return;
    }

    if (value === '=') {
      try {
        if (input.includes('/0')) {
          Alert.alert("Error", "División por cero");
          setInput('');
          return;
        }
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
      return;
    }

    setInput(input + value);
  };

  return (
    <View>
      <Display value={input} />
      <Teclado onPress={handlePress} />
    </View>
  );
};

export default Calculadora;