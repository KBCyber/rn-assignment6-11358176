// screens/CheckoutScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Checkout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Checkout;
