import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Items } from '../database/constants'; // Assume Items has artist, category, label, and price fields.
import { StackParamList } from "../App";
import { useTheme } from '../contexts/ThemeContext';

type SearchScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'SearchMain'>;

const SearchScreen = () => {
  const navigation = useNavigation<SearchScreenNavigationProp>();
  const { theme, isDarkMode, toggleTheme } = useTheme();

  // States for search query and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null); // Set selected price filter
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null); // Set selected artist filter
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Set selected category filter
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null); // Set selected label filter

  // Apply dynamic styles based on theme
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#000' : '#fff',
      padding: 20,
      paddingTop: 20,
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#333' : '#f1f1f1',
      borderRadius: 14,
      padding: 10,
      marginBottom: 16,
      marginTop: 10,
      width: 340,
    },
    searchInput: {
      fontSize: 15,
      marginLeft: 10,
      flex: 1,
      height: 36,
      borderRadius: 40,
      backgroundColor: isDarkMode ? '#333' : '#f1f1f1',
      color: isDarkMode ? '#fff' : '#000',
    },
    cardContent: {
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
    productName: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 0,
      color: isDarkMode ? '#fff' : '#000',
    },
    productPrice: {
      fontSize: 14,
      color: isDarkMode ? '#ddd' : '#333',
      fontWeight: 'normal',
    },
    detailsButton: {
      borderRadius: 20,
      borderColor: isDarkMode ? '#444' : '#F4F5F6',
      backgroundColor: isDarkMode ? '#444' : '#F6F5F4',
    },
    buttonLabel: {
      color: isDarkMode ? '#fff' : '#000', // White text in dark mode, black in light mode
    },
  });

  // Convert price string to a number safely
  const parsePrice = (price: string) => {
    const parsedPrice = parseFloat(price);
    return isNaN(parsedPrice) ? 0 : parsedPrice;
  };

  // Extract unique artists, categories, and labels from Items (for filter buttons)
  const uniqueArtists = [...new Set(Items.map(item => item.artist))];
  const uniqueCategories = [...new Set(Items.map(item => item.category))];
  const uniqueLabels = [...new Set(Items.map(item => item.label))];

  // Filtering logic based on search query and selected filters
  const filteredItems = Items.filter(item => {
    const itemPrice = parsePrice(item.price);

    const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = 
      (!selectedPriceRange || itemPrice <= selectedPriceRange) &&
      (!selectedArtist || item.artist === selectedArtist) &&
      (!selectedCategory || item.category === selectedCategory) &&
      (!selectedLabel || item.label === selectedLabel);

    return matchesQuery && matchesFilter;
  });

  return (
    <View style={dynamicStyles.container}>
      <View style={styles.gridContainer}>
        <Image
          source={require('../database/icons/left.png')}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            tintColor: isDarkMode ? '#FFFFFF' : '#3C6EEF',
          }}
        />
        <View style={dynamicStyles.searchBar}>
          <TextInput
            style={dynamicStyles.searchInput}
            placeholder="Search"
            placeholderTextColor={isDarkMode ? '#aaa' : '#000'}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filters}>
        {uniqueLabels.map(label => (
          <Button
            key={label}
            mode={selectedLabel === label ? 'contained' : 'outlined'}
            style={dynamicStyles.detailsButton}
            labelStyle={dynamicStyles.buttonLabel} // Apply labelStyle to ensure white text in dark mode
            onPress={() => setSelectedLabel(label)}
          >
            {label}
          </Button>
        ))}
      </View>

      {/* Filtered Items List */}
      <FlatList
        data={filteredItems}
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
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    shadowColor: 'black',
    backgroundColor: 'black',
  },
  productImage: {
    height: 190,
  },
});

export default SearchScreen;
