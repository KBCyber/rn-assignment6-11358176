import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: '1', name: 'Office Wear', price: 120, image: require('../assets/dress1.png') },
  { id: '2', name: 'Black', price: 120, image: require('../assets/dress2.png') },
  { id: '3', name: 'Church Wear', price: 120, image: require('../assets/dress3.png') },
  { id: '4', name: 'Lamerei', price: 120, image: require('../assets/dress4.png') },
  { id: '5', name: '21WN', price: 120, image: require('../assets/dress5.png') },
  { id: '6', name: 'Lopo', price: 120, image: require('../assets/dress6.png') },
  { id: '7', name: '21WN', price: 120, image: require('../assets/dress7.png') },
  { id: '8', name: 'lame', price: 120, image: require('../assets/dress3.png') },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={require('../assets/Menu.png')} style={styles.menuIcon} />
        <View style={styles.logoContainer}>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
        </View>
        <View style={styles.headerRight}>
          <Icon name="search-outline" size={30} color="#000" style={styles.headerIcon} />
          <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
            <Icon name="bag-outline" size={30} color="#000" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.storyContainer}>
        <Text style={styles.title}>OUR STORY</Text>
        <View style={styles.iconContainer}>
        <Image source={require('../assets/Listview-01.png')} style={styles.icon} />
          <Icon name="filter" size={25} color="#dd8560" style={styles.headerIcon} />
        </View>
      </View>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <ImageBackground source={item.image} style={styles.image}>
              <Image source={require('../assets/add.png')} style={styles.addicon}/>
            </ImageBackground>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDesc}>reversible angora cardigan</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    position: 'relative',
  },
  headerIcon: {
    marginLeft: 15,
  },
  menuIcon: {
    marginLeft: 15,
    height:  30,
    width:  30,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  logoContainer: {
    position: 'absolute',
    left: '50%',
    top: 20,
    transform: [{ translateX: -100 }],
  },
  logo: {
    width: 200,
    height: 50, 
    resizeMode: 'contain',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '350',
    lineHeight: 24,
    letterSpacing: 5,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  productList: {
    paddingHorizontal: 10,
  },
  addicon:{
    margin: 10,
    height: 25,
    width: 25,
  },
  product: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 260,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  addIcon: {
    margin: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productDesc: {
    fontSize: 14,
    color: '#888',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dd8560',
  },
});

export default HomeScreen;
