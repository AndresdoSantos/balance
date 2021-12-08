import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Header } from './Header';
import { Journey } from './Journey';
import { Meetings } from './Meetings';

export function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Header />

        <Meetings />

        <Journey />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  scrollContainer: {},
});
