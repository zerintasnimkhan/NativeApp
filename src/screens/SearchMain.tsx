import React from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, Image } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Items } from '../database/constants'; 
import { StackParamList } from "../App";

type SearchScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'SearchMain'>;

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
          }}
        />
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="Wireless headphones" />
        </View>
      </View>
      <Text style={styles.resultCount}>52,630 products found in Headphones category</Text>
      <View style={styles.filters}>
        <Button mode="contained" buttonColor="#F6F5F4" textColor="black" style={styles.detailsButton}>Price</Button>
        <Button mode="contained" buttonColor="#F6F5F4" textColor="black" style={styles.detailsButton}>Brand</Button>
        <Button mode="contained" buttonColor="#F6F5F4" textColor="black" style={styles.detailsButton}>Color</Button>
        <Button mode="contained" buttonColor="#F6F5F4" textColor="black" style={styles.detailsButton}>Details</Button>
      </View>
      <FlatList
        data={Items} 
        keyExtractor={(item) => item.id.toString()} 
        numColumns={2} 
        columnWrapperStyle={styles.row} 
        renderItem={({ item }) => (
          <Card
            style={styles.productCard}
            onPress={() => navigation.navigate('Details', { product: item })}
          >
            <Card.Cover source={{ uri: item.image }} style={styles.productImage} />
            <Card.Content style={styles.cardContent}>
              <Title style={styles.productName}>{item.name}</Title>
              <Paragraph style={styles.productPrice}>${item.price}</Paragraph>
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
    marginBottom: 14,
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
