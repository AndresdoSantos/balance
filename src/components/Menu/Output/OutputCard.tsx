import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type OutputCardProps = {
  color: '#8fc69b' | '#FEAB5F' | '#5546aa';
  abbreviation: 'AM' | 'JD' | 'HJ';
  name: 'Arman M.' | 'Jhon May' | 'Hool Lil';
};

export function OutputCard({ color, abbreviation, name }: OutputCardProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.abbreviationContainer, { backgroundColor: color }]}>
        <Text style={styles.abbreviationText}>{abbreviation}</Text>
      </View>
      <View>
        <Text style={styles.userNameText}>{name}</Text>
        <Text style={styles.priceText}>+ 16.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 150,
    backgroundColor: '#F3F4F6',
    borderRadius: 15,
    padding: 7,
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  abbreviationContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 15,
    marginRight: 10,
  },
  abbreviationText: {
    fontFamily: 'inter-800',
    color: '#fff',
  },
  userNameText: {
    fontFamily: 'inter-400',
    color: '#374151',
  },
  priceText: {
    fontFamily: 'inter-800',
  },
});
