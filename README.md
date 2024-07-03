Here's the updated README file with design choices and implementation details:

---

# Open Fashion App

## Overview

The Open Fashion App is a React Native application that showcases a variety of fashion products. Users can navigate through the product list, view details, add products to their cart, and proceed to checkout.

## Features

- **Home Screen** displaying a list of products
- **Custom Header** with a centered logo and navigation icons
- **Add to Cart** functionality for each product
- **Remove from Cart** functionality for each selected item
- **Local Storage** using AsyncStorage to persist selected items
- **Checkout Screen** displaying selected items

## Design Choices

- **UI Design**: The app's design focuses on simplicity and user experience. The Home Screen displays products in a grid format, making it easy for users to browse through the catalog. The custom header features a centered logo for brand visibility and icons for search and cart navigation.
- **Data Storage**: To persist the cart items locally on the device, AsyncStorage is used. This ensures that the cart items are retained even if the app is closed and reopened, providing a seamless user experience.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- React Native CLI

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KBCYber/project6.git
   cd project6
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the application:

   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

## Implementation Details

### Adding Items to Cart

When a user taps the "Add to Cart" button, the selected product is saved in AsyncStorage:

```javascript
const addToCart = async (product) => {
  try {
    let cart = await AsyncStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
    cart.push(product);
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
    Alert.alert('Success', 'Item added to cart');
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'Failed to add item to cart');
  }
};
```

### Removing Items from Cart

When a user taps the "Remove" button, the selected product is removed from AsyncStorage:

```javascript
const removeFromCart = async (productId) => {
  try {
    let cart = await AsyncStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
    cart = cart.filter(item => item.id !== productId);
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
    setCartItems(cart);
    Alert.alert('Success', 'Item removed from cart');
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'Failed to remove item from cart');
  }
};
```

### Loading Cart Items

The saved cart items are loaded from AsyncStorage when the CheckoutScreen is loaded:

```javascript
useEffect(() => {
  const loadCart = async () => {
    try {
      let cart = await AsyncStorage.getItem('cart');
      cart = cart ? JSON.parse(cart) : [];
      setCartItems(cart);
    } catch (error) {
      console.error(error);
    }
  };
  loadCart();
}, []);
```

## Screenshots

<div style="display: flex; justify-content: space-around;">

### `HomeScreen` and `CartScreen`

   <img src="./project6/assets/shot.png" alt="HomeScreen" width="200"/>
   <img src="./project6/assets/shot1.png" alt="HomeScreen" width="200"/>
   <img src="./project6/assets/shot2.png" alt="HomeScreen" width="20
   0"/>

### More of the `CartScreen`
  <img src="./project6/assets/shot3.png" alt="CartScreen" width="240"/>
  <img src="./project6/assets/shot4.png" alt="CartScreen" width="240"/>

### More
  <img src="./project6/assets/shot6.png" alt="CartScreen" width="240"/>
  <img src="./project6/assets/shot5.png" alt="CartScreen" width="240"/>
</div>

### Assets

- `Logo.png`: Logo image for the header
- `dress1.png` to `dress7.png`: Images of the products

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

---

