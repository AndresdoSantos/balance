import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';

export function Card() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.logoContainer}>
          <Ionicons name="md-wallet-sharp" size={15} color="white" />
          <Text style={styles.cardNameText}>elt</Text>
        </View>
        <Text style={styles.cardNumberText}>4562 1122 4595 7852</Text>
      </View>
      <Text style={styles.userNameText}>John Doe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#381841',
    height: 150,
    width: 200,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    position: 'relative',
    paddingHorizontal: 20,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    width: 50,
  },
  cardNameText: {
    fontFamily: 'inter-400',
    color: '#fff',
    marginLeft: 5,
  },
  cardNumberText: {
    fontFamily: 'inter-400',
    color: '#fff',
  },
  userNameText: {
    fontFamily: 'inter-800',
    color: '#fff',
  },
});
