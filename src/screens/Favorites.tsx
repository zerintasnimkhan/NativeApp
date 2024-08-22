import React from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeItemFromFavorites } from '../redux/slices/favoritesSlice';

const FavoritesScreen = () => {
  const favoriteItems = useSelector((state: RootState) => state.favorites.items);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (id: string) => {
    dispatch(removeItemFromFavorites(id));
  };

  const renderItem = ({ item }: { item: { id: string; name: string; price: number; image: string } }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={() => handleRemoveFromFavorites(item.id)}>
        <Image source={require('../database/icons/cross.png')} style={styles.removeIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.favoritesText}>Favorites</Text>
      {favoriteItems.length > 0 ? (
        <FlatList
          data={favoriteItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.emptyText}>No items in your favorites list</Text>
      )}
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  favoritesText: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#565656',

  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginVertical: 8,
    padding: 10,
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
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#333',
  },
  removeIcon: {
    width: 24,
    height: 24,
  },
  emptyText: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
});
