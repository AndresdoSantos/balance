import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Title } from '../Title';
import { HistoryCard } from './HistoryCard';

export function History() {
  return (
    <>
      <Title text="Upcoming Payments" />

      <View style={styles.container}>
        <HistoryCard
          color="#D1FAE5"
          price={2000}
          reason="Belong interactive"
          title="Salary"
          by="Salary"
        />
        <HistoryCard
          color="#142428"
          price={20}
          reason="Belong interactive"
          title="Uber eats"
          by="UberEats"
          output
        />
        <HistoryCard
          color="#BCEBFF"
          price={50}
          reason="Freelance payment"
          title="Paypal"
          by="PayPal"
        />
        <HistoryCard
          color="#142428"
          price={15}
          reason="Belong interactive"
          title="Uber eats"
          by="UberEats"
          output
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
