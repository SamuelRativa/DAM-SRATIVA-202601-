import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Display = ({ value }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.text}>{value || '0'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    padding: 20,
    backgroundColor: '#000',
    alignItems: 'flex-end'
  },
  text: {
    color: '#0f0',
    fontSize: 32
  }
});

export default Display;