// CategoriesScreen.tsx
import React from 'react';
import { View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';

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

// Define your navigation parameter list directly in this file
export type RootStackParamList = {
  Categories: undefined; // Or any parameters for Categories screen
  CategoryDetail: { categoryId: string }; // Example screen with parameter
};

type CategoriesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Categories'>;

interface Props {
  navigation: CategoriesScreenNavigationProp;
}

const CategoriesScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Art Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => navigation.navigate('CategoryDetail', { categoryId: item.id })}
          >
            <Image source={item.icon} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{item.name}</Text>
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
  title: {
    marginTop: 5,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 28,
    color: '#565656',
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
    fontWeight: 'semibold',
    color: '#565656'
  },
});

export default CategoriesScreen;
