import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Shadow } from './Buttons/Shadow';

export function Balance() {
  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitleText}>Balance</Text>
        <Text style={styles.balancePriceText}>$ 92,510</Text>
      </View>
      <View>
        <Text style={styles.trafficeTitleText}>Traffic</Text>
        <Shadow />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  balanceContainer: {
    marginBottom: 20,
  },
  balanceTitleText: {
    fontFamily: 'inter-400',
    color: '#9CA3AF',
    fontSize: 13,
    marginBottom: 5,
  },
  balancePriceText: {
    fontFamily: 'inter-900',
    color: '#111827',
    fontSize: 25,
  },
  trafficeTitleText: {
    fontFamily: 'inter-400',
    color: '#9CA3AF',
    fontSize: 13,
    marginBottom: 5,
  },
});
