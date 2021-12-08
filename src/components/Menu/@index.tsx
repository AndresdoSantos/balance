import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Balance } from './Balance';
import { Card } from './Card';
import { Header } from './Header';
import { History } from './History/History';
import { Output } from './Output/Output';

export function Menu() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.balanceWrapper}>
        <Card />
        <Balance />
      </View>

      <Output />

      <History />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
  balanceWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
});
