import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function Shadow() {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name="ios-chevron-down" size={12} color="#DC2626" />
      <Text style={styles.text}>5,9%</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 30,
    width: 70,
    borderRadius: 5,
    backgroundColor: '#FEE2E2',
  },
  text: {
    fontFamily: 'inter-400',
    color: '#DC2626',
    fontSize: 12,
    marginLeft: 5,
  },
});
