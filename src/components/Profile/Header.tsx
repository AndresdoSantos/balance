import { Ionicons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppContext } from '../../contexts/AppContext';

export function Header() {
  const { navigate } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={20}
        style={styles.back}
        onPress={() => navigate('menu')}
      />

      <View style={styles.imageContainer} />

      <Text style={styles.userNameText}>John Doe</Text>
      <Text style={styles.userProfessionText}>Programmer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 70,
    position: 'relative',
  },
  back: {
    position: 'absolute',
    top: 0,
    left: 20,
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: '#FA973B',
    marginBottom: 20,
  },
  userNameText: {
    fontFamily: 'inter-700',
    fontSize: 20,
  },
  userProfessionText: {
    fontFamily: 'inter-400',
    fontSize: 12.5,
    color: '#4B5563',
  },
});
