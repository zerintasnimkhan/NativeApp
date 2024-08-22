import React from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, Image } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Details from './Details'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from "../App"

type SearchScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'SearchMain'>;

const products = [
  { id: '1', name: 'Sony Wireless Head...', price: '$58.00', image: 'https://image.made-in-china.com/202f0j00oMIqEevdZrct/Over-Ear-Earphones-Wireless-Noise-Cancelling-Anc-Bluetooth-Headphone.webp' },
  { id: '2', name: 'Yoto Headphones', price: '$44.99', image: 'https://cdn.shopify.com/s/files/1/0310/7487/7577/products/PRACXX00423_headphones_Nocables_Noshadow_2000-removebg-preview_4f1f265e-6052-48b2-bbc4-0a0e70084887_1280x.webp?v=1676475948' },
  { id: '3', name: 'Stylish Wire-free Blu..', price: '$47.80', image: 'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1920x800/Media/Images/Product/Visual/23782_pictures_product_visual_1.png'},
  { id: '4', name: 'Beats Studio Pro Wir..', price: '$65.90', image: 'https://www.araba.ae/cdn/shop/files/2_ae55ee80-e23a-43a0-9546-d0afa3f0ac52.webp?v=1707835755' },
  { id: '2', name: 'Yoto Headphones', price: '$44.99', image: 'https://cdn.shopify.com/s/files/1/0310/7487/7577/products/PRACXX00423_headphones_Nocables_Noshadow_2000-removebg-preview_4f1f265e-6052-48b2-bbc4-0a0e70084887_1280x.webp?v=1676475948' },
  { id: '3', name: 'Stylish Wire-free Blu..', price: '$47.80', image: 'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1920x800/Media/Images/Product/Visual/23782_pictures_product_visual_1.png'},
];

const SearchScreen = () => {
  const navigation = useNavigation<SearchScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
       <Image
                source={require('../database/icons/left.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  // backgroundColor: '#F5F6F4',
                  // borderBottomWidth: 50,
                  // borderRightWidth: 20,
                  // borderLeftWidth: 20,
                  // borderRadius: 10
                }}
              />
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Wireless headphones" />
      </View>
      </View>
      <Text style={styles.resultCount}>52,630 products found in Headphones category</Text>
      <View style={styles.filters}>
        <Button mode="outlined" textColor="black" style={styles.filterButton}>Price</Button>
        <Button mode="outlined" textColor="black" style={styles.filterButton}>Brand</Button>
        <Button mode="outlined" buttonColor="#F6F5F4" textColor="black" style={styles.detailsButton}>Color</Button>
        <Button mode="contained" buttonColor="#F6F5F4" textColor="black" style={styles.detailsButton}>Details</Button>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        columnWrapperStyle={styles.row} 
        renderItem={({ item }) => (
          <Card style={styles.productCard}
          onPress={() => navigation.navigate('Details', { product: item })} >
            <Card.Cover source={{ uri: item.image }} style={styles.productImage} />
            <Card.Content style={styles.cardContent}>
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
    paddingTop: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 14,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    width: 330
  },
  searchInput: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
    height: 36,
    borderRadius: 40,
    backgroundColor: '#f1f1f1',
  },
  resultCount: {
    marginTop: 6,
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
    borderColor: 'F4F5F6'
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
  cardContent: {
    backgroundColor: 'white'

  },
  productImage: {
    height: 190,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  productPrice: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'normal',
  },
});

export default SearchScreen;
