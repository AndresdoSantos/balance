import React from 'react';
import { StyleSheet, Text } from 'react-native';

type TitleProps = {
  text: 'Send Money' | 'Upcoming Payments';
};

export function Title({ text }: TitleProps) {
  return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'inter-600',
    marginTop: 25,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});
