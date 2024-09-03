import React from 'react';
import { View, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Items } from '../database/constants';
import { StackParamList } from "../App";
import { useTheme } from '../contexts/ThemeContext';

type SearchScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'SearchMain'>;

const SearchScreen = () => {
  const navigation = useNavigation<SearchScreenNavigationProp>();
  const { theme, isDarkMode, toggleTheme } = useTheme();
  // Apply dynamic styles based on theme
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#000' : '#fff', // Black for dark mode, white for light mode
      padding: 20,
      paddingTop: 20,
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#333' : '#f1f1f1', // Darker background for dark mode
      borderRadius: 14,
      padding: 10,
      marginBottom: 16,
      marginTop: 10,
      width: 300,
    },
    searchInput: {
      fontSize: 15,
      marginLeft: 10,
      flex: 1,
      height: 36,
      borderRadius: 40,
      backgroundColor: isDarkMode ? '#333' : '#f1f1f1', // Darker input background for dark mode
      color: isDarkMode ? '#fff' : '#000', // White text for dark mode, black text for light mode
    },
    cardContent: {
      backgroundColor: isDarkMode ? '#222' : '#fff', // Darker card background for dark mode
    },
    productName: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 0,
      color: isDarkMode ? '#fff' : '#000', // White text for dark mode, black text for light mode
    },
    productPrice: {
      fontSize: 14,
      color: isDarkMode ? '#ddd' : '#333', // Lighter text for dark mode
      fontWeight: 'normal',
    },
    detailsButton: {
      borderRadius: 20,
      borderColor: isDarkMode ? '#444' : '#F4F5F6',
      backgroundColor: isDarkMode ? '#444' : '#F6F5F4',
      color: isDarkMode ? '#fff' : 'black',
    },
  });

 

  // Ensure the theme object has a 'mode' property
  const isLightMode = theme.mode === 'light';
  const iconSource = theme.mode === 'light'
  ? require('../database/icons/sun.png') // Replace with your light mode icon path
  : require('../database/icons/moon.png'); 

  return (
    <View style={dynamicStyles.container}>
      <View style={styles.gridContainer}>
        <Image
          source={require('../database/icons/left.png')}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
        <View style={dynamicStyles.searchBar}>
          <TextInput style={dynamicStyles.searchInput} placeholder="Search" placeholderTextColor={isDarkMode ? '#aaa' : '#000'} />
        </View>
        <TouchableOpacity onPress={toggleTheme}>
        <Image
          source={iconSource}
          style={[styles.icon, { tintColor: theme.text }]}
        />
      </TouchableOpacity>
      </View>
      <View style={styles.filters}>
        <Button mode="contained" style={dynamicStyles.detailsButton}>Price</Button>
        <Button mode="contained" style={dynamicStyles.detailsButton}>Artist</Button>
        <Button mode="contained" style={dynamicStyles.detailsButton}>Category</Button>
        <Button mode="contained" style={dynamicStyles.detailsButton}>Label</Button>
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
            <Card.Content style={dynamicStyles.cardContent}>
              <Title style={dynamicStyles.productName}>{item.name}</Title>
              <Paragraph style={dynamicStyles.productPrice}>${item.price}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 10,
    marginRight: 16,
    marginLeft: 16
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  productCard: {
    width: '48%',
    borderRadius: 16,
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  productImage: {
    height: 190,
  },
});

export default SearchScreen;
