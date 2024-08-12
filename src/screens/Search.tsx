// import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { COLORS } from '../database/constants'


// const Search = () => {
//   return (
//     <View style={{
//       width: '100%',
//       height: '100%',
//       backgroundColor: COLORS.white,
//      }}>
//       <StatusBar barStyle="default" />
//       <ScrollView showsVerticalScrollIndicator={false}>
//     <View
//     style={{
//       width: '100%',
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       padding: 16,
//     }}>
//     <TouchableOpacity>
      
      
//       </TouchableOpacity>
//     </View>
   
//       </ScrollView>
//     </View>
//   )
// }

// export default Search


import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

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
        <TouchableOpacity style={styles.filterButton}><Text>Price</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text>Brand</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text>Color</Text></TouchableOpacity>
        <TouchableOpacity style={styles.detailsButton}><Text>Details</Text></TouchableOpacity>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
      />
      <View style={styles.bottomNav}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  resultCount: {
    marginBottom: 10,
    fontSize: 16,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: '#e1e1e1',
    padding: 10,
    borderRadius: 5,
  },
  detailsButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productName: {
    flex: 1,
  },
  productPrice: {
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#f1f1f1',
  },
  activeIcon: {
    color: '#007bff',
  },
});

export default SearchScreen;
