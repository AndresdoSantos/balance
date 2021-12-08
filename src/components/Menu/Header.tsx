import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { AppContext } from '../../contexts/AppContext';

export function Header() {
  const { navigate } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.message}>Welcome back</Text>
        <Text style={styles.title}>John Doe</Text>
      </View>

      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigate('profile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 150,
    paddingHorizontal: 20,
  },
  message: {
    fontFamily: 'inter-400',
    color: '#9CA3AF',
  },
  title: {
    fontFamily: 'inter-800',
    fontSize: 25,
    color: '#1F2937',
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#FA973B',
  },
});
