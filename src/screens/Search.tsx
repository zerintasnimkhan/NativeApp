import React from 'react';
import { View, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const products = [
  { id: '1', name: 'Sony Wireless Head...', price: '$58.00', image: 'https://www.gadstyle.com/wp-content/uploads/2020/12/sony-wh-ch510-wireless-headphones-1.jpg' },
  { id: '2', name: 'Yoto Headphones', price: '$44.99', image: 'https://cdn.shopify.com/s/files/1/0310/7487/7577/products/PRACXX00423_headphones_Nocables_Noshadow_2000-removebg-preview_4f1f265e-6052-48b2-bbc4-0a0e70084887_1280x.webp?v=1676475948' },
  { id: '3', name: 'Stylish Wire-free Blu...', price: '$47.80', image: 'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1920x800/Media/Images/Product/Visual/23782_pictures_product_visual_1.png'},
  { id: '4', name: 'Beats Studio Pro Wir...', price: '$65.90', image: 'https://www.araba.ae/cdn/shop/files/2_ae55ee80-e23a-43a0-9546-d0afa3f0ac52.webp?v=1707835755' },
];

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Wireless headphones" />
      </View>
      <Text style={styles.resultCount}>52,630 products found in Headphones category</Text>
      <View style={styles.filters}>
        <Button mode="outlined" style={styles.filterButton}>Price</Button>
        <Button mode="outlined" style={styles.filterButton}>Brand</Button>
        <Button mode="outlined" style={styles.filterButton}>Color</Button>
        <Button mode="contained" style={styles.detailsButton}>Details</Button>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        columnWrapperStyle={styles.row} 
        renderItem={({ item }) => (
          <Card style={styles.productCard}>
            <Card.Cover source={{ uri: item.image }} style={styles.productImage} />
            <Card.Content>
              <Title style={styles.productName}>{item.name}</Title>
              <Paragraph style={styles.productPrice}>{item.price}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 30,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 14,
    padding: 10,
    marginBottom: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    height: 36,
    borderRadius: 40,
    backgroundColor: '#f1f1f1',
  },
  resultCount: {
    marginBottom: 12,
    fontSize: 16,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  filterButton: {
    borderRadius: 20,
  },
  detailsButton: {
    borderRadius: 20,
  },
  row: {
    justifyContent: 'space-between', 
    marginBottom: 15,
  },
  productCard: {
    width: '48%',
    borderRadius: 14, 
    overflow: 'hidden', 
  },
  productImage: {
    height: 160,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'normal',
  },
});

export default SearchScreen;
