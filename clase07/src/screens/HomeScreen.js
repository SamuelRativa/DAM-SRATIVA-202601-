import React from 'react';
import { View, StyleSheet } from 'react-native';
import Calculadora from '../components/organisms/Calculadora';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Calculadora />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default HomeScreen;