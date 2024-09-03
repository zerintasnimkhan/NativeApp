import React from 'react';
import { View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../contexts/ThemeContext';

// Define the categories array directly in this file
const categories = [
  {
    id: '1',
    name: 'Oil Painting',
    icon: require('../database/images/image@2x-0.png'), // Use require to import local image
  },
  {
    id: '2',
    name: 'Acrylic Painting',
    icon: require('../database/images/image@2x-1.png'), // Adjust path and filename as needed
  },
  {
    id: '3',
    name: 'Watercolor Painting',
    icon: require('../database/images/image@2x-2.png'), // Adjust path and filename as needed
  },
  {
    id: '4',
    name: 'Digital Painting',
    icon: require('../database/images/image@2x-3.png'), // Adjust path and filename as needed
  },
  {
    id: '5',
    name: 'Pencil Drawing',
    icon: require('../database/images/image@2x-4.png'), // Adjust path and filename as needed
  },
  {
    id: '6',
    name: 'Ink Drawing',
    icon: require('../database/images/image@2x-5.png'), // Adjust path and filename as needed
  },
  {
    id: '7',
    name: 'Charcoal Drawing',
    icon: require('../database/images/image@2x-6.png'), // Adjust path and filename as needed
  },
  {
    id: '8',
    name: 'Pastel Drawing',
    icon: require('../database/images/image@2x-7.png'), // Adjust path and filename as needed
  },
  {
    id: '9',
    name: 'Digital Illustrations',
    icon: require('../database/images/image@2x-8.png'), // Adjust path and filename as needed
  },
  {
    id: '10',
    name: 'Concept Art',
    icon: require('../database/images/image@2x-9.png'), // Adjust path and filename as needed
  },
  {
    id: '11',
    name: 'Landscape Photography',
    icon: require('../database/images/image@2x-10.png'), // Adjust path and filename as needed
  },
  {
    id: '12',
    name: 'Portrait Photography',
    icon: require('../database/images/image@2x-11.png'), // Adjust path and filename as needed
  },
  {
    id: '13',
    name: 'Abstract Photography',
    icon: require('../database/images/image@2x-12.png'), // Adjust path and filename as needed
  },
];

export type RootStackParamList = {
  Categories: undefined; // Or any parameters for Categories screen
  CategoryDetail: { categoryId: string }; // Example screen with parameter
};

type CategoriesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Categories'>;

interface Props {
  navigation: CategoriesScreenNavigationProp;
}

const CategoriesScreen: React.FC<Props> = ({ navigation }) => {
  const { theme, toggleTheme } = useTheme();
  const isLightMode = theme.mode === 'light';
  const iconSource = isLightMode
    ? require('../database/icons/sun.png') // Replace with your light mode icon path
    : require('../database/icons/moon.png'); // Replace with your dark mode icon path

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <Text style={[styles.title, { color: theme.text }]}>Art Categories</Text>
        <TouchableOpacity onPress={toggleTheme}>
          <Image source={iconSource} style={[styles.icon, { tintColor: theme.text }]} />
        </TouchableOpacity>
      </View>

      {/* Categories List */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => navigation.navigate('CategoryDetail', { categoryId: item.id })}
          >
            <Image source={item.icon} style={styles.categoryImage} />
            <Text style={[styles.categoryTitle, { color: theme.text }]}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36,
  },
  headerRow: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Space out the title and icon
    alignItems: 'center', // Vertically center items
    marginBottom: 28,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
  },
  listContainer: {
    paddingBottom: 16,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  categoryTitle: {
    marginLeft: 14,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CategoriesScreen;
