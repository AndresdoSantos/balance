import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Title } from '../Title';

import { OutputCard } from './OutputCard';

export function Output() {
  return (
    <View style={styles.container}>
      <Title text="Send Money" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <OutputCard color="#8fc69b" abbreviation="HJ" name="Arman M." />
        <OutputCard color="#FEAB5F" abbreviation="JD" name="Jhon May" />
        <OutputCard color="#5546aa" abbreviation="AM" name="Hool Lil" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  scrollContainer: {
    width: '100%',
    paddingLeft: 20,
  },
});
