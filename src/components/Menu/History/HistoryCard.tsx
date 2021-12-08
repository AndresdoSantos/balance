import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

import uberEatsLogo from '../../../../assets/images/uberLogo.jpg';
import payPalLogo from '../../../../assets/images/payPalLogo.png';

type HistoryCardProps = {
  color: '#D1FAE5' | '#142428' | '#BCEBFF';
  title: 'Salary' | 'Uber eats' | 'Paypal';
  reason: 'Belong interactive' | 'Freelance payment';
  by: 'UberEats' | 'PayPal' | 'Salary';
  price: number;
  output?: boolean;
};

export function HistoryCard({
  color,
  reason,
  title,
  price,
  output,
  by,
}: HistoryCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={[styles.imageContainer, { backgroundColor: color }]}>
          {title === 'Salary' ? (
            <Entypo name="suitcase" size={20} color="#10B981" />
          ) : (
            <Image
              source={by === 'UberEats' ? uberEatsLogo : payPalLogo}
              style={{ width: 50, height: 50, borderRadius: 50 }}
              resizeMode="stretch"
            />
          )}
        </View>
        <View style={styles.titleAndReasonContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.reasonText}>{reason}</Text>
        </View>
      </View>

      <Text
        style={[
          styles.salaryText,
          {
            color:
              typeof output !== 'undefined' && output ? '#c53030' : '#374151',
          },
        ]}
      >
        {typeof output !== 'undefined' && output ? '-' : '+'}$ {price}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 15,
  },
  titleAndReasonContainer: {
    marginLeft: 20,
  },
  titleText: {
    fontFamily: 'inter-700',
  },
  reasonText: {
    fontFamily: 'inter-400',
    color: '#6B7280',
    fontSize: 13,
  },
  salaryText: {
    fontFamily: 'inter-800',
    fontSize: 17.5,
  },
});
