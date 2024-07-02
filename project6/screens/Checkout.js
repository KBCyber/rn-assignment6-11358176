import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const cartItems = [
  { id: '1', name: 'OFFICE WEAR', description: 'Office wear for your office', price: 120, image: require('../assets/dress1.png') },
  { id: '2', name: 'LAMEREI', description: 'Recycle Boucle Knit Cardigan Pink', price: 120, image: require('../assets/dress4.png') },
  { id: '3', name: 'CHURCH WEAR', description: 'Recycle Boucle Knit Cardigan Pink', price: 120, image: require('../assets/dress3.png') },
];

const CheckoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon />
        <View style={styles.logoContainer}>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
        </View>
        <View style={styles.headerRight}>
          <Icon name="search-outline" size={30} color="#000" style={styles.headerIcon} />
        </View>
      </View>
      <View style={styles.checkoutTitleContainer}>
        <Text style={styles.checkoutTitle}>CHECKOUT</Text>
        <View style={styles.titleUnderline}>
          <View style={styles.line} />
          <View style={styles.diamond} />
          <View style={styles.line} />
        </View>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDesc}>{item.description}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              
            <TouchableOpacity>
              <Icon name="close-circle-outline" size={30} color="red" style={styles.removeIcon} />
            </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 2,
    position: 'relative',
  },
  logoContainer: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkoutTitleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  checkoutTitle: {
    fontSize: 24,
    fontWeight: '350',
    lineHeight: 24,
    letterSpacing: 7,
  },
  titleUnderline: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  line: {
    width: 100,
    height: 1,
    backgroundColor: '#ccc',
  },
  diamond: {
    width: 12,
    height: 12,
    borderRadius: 2,
    borderWidth: 1.5,
    borderColor: "#ccc",
    transform: [{ rotate: '45deg' }],
    marginHorizontal: 1,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  productImage: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
  },
  productDetails: {
    flex: 1,
    marginLeft: 20,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDesc: {
    fontSize: 16,
    color: '#555555',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dd8560',
  },
  removeIcon: {
    marginLeft: 150,
  },
});

export default CheckoutScreen;
