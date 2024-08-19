import React from 'react';
import { View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text, Button, Divider } from 'react-native-paper';
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

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  const renderItem = ({ item }: { item: { id: string; name: string; price: number; image: string; quantity: number } }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => handleUpdateQuantity(item.id, item.quantity - 1)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity.toString().padStart(2, '0')}</Text>
          <TouchableOpacity onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => handleRemoveItem(item.id)} style={styles.removeButton}>
          <Text style={styles.removeText}>Remove item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <Text style={styles.orderSummaryText}>Order Summary</Text>
        )}
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <Divider style={styles.divider} />
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Subtotal</Text>
              <Text style={styles.summaryAmount}>${calculateSubtotal()}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Shipping</Text>
              <Text style={styles.summaryAmount}>--</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.totalRow}>
              <Text style={styles.totalText}>Total (USD)</Text>
              <Text style={styles.totalAmount}>${calculateSubtotal()}</Text>
            </View>
            <Button mode="contained" style={styles.confirmButton} contentStyle={styles.buttonContent}>
              Confirm Order
            </Button>
          </View>
        )}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  orderSummaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginVertical: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  actionContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
    marginBottom: 8,
  },
  quantityButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
  },
  quantityButtonText: {
    fontSize: 20,
    color: '#333',
  },
  quantityText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  removeButton: {
    alignSelf: 'flex-end',
  },
  removeText: {
    color: 'red',
    fontSize: 14,
  },
  footer: {
    marginTop: 340,
    backgroundColor: '#FFFFFF',
    paddingBottom: 40,
  },
  divider: {
    marginVertical: 16,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 16,
    color: '#777',
  },
  summaryAmount: {
    fontSize: 16,
    color: '#333',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 24,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  confirmButton: {
    backgroundColor: '#3C6EEF',
    height: 50,
    justifyContent: 'center',
  },
  buttonContent: {
    height: 50,
  },
});
