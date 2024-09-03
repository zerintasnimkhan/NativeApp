import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './CategoriesScreen'; // Ensure this path is correct
import { artworks } from '../database/constants'; // Ensure this path is correct

type CategoryDetailScreenRouteProp = RouteProp<RootStackParamList, 'CategoryDetail'>;

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'CategoryDetail'>;
};

const CategoryDetailScreen: React.FC<Props> = () => {
  const route = useRoute<CategoryDetailScreenRouteProp>();
  const { categoryId } = route.params; // Retrieve the passed categoryId

  // Filter artworks based on the category ID
  const filteredItems = artworks.filter((item) => item.id === categoryId); // Ensure the filter condition matches your data structure

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Artworks for Selected Category</Text>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
        numColumns={2} // Display 2 items per row
        columnWrapperStyle={styles.row} // Style for the row of items
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});

export default CategoryDetailScreen;
