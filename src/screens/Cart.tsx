import React from 'react';
import { View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeItemFromCart, updateItemQuantity } from '../redux/slices/cartSlice';

const CartScreen = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity >= 1) {
      dispatch(updateItemQuantity({ id, quantity }));
    }
  };

  const renderItem = ({ item }: { item: { id: string; name: string; price: number; image: string; quantity: number } }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <Button onPress={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</Button>
          <Text>{item.quantity}</Text>
          <Button onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</Button>
        </View>
        <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={cartItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'grey',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeText: {
    color: 'red',
    marginTop: 10,
  },
});
