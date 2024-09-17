import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'; // Import for navigation

// Define the navigation stack params
type RootStackParamList = {
  SelectArtCategories: undefined; // Current screen
  AboutYouScreen: undefined; 
};

// Define navigation prop type for this screen
type ArtCategoriesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SelectArtCategories'>;

interface Props {
  navigation: ArtCategoriesScreenNavigationProp;
}

// Initialize categories with a 'selected' field
const categories = [
  { id: '1', name: 'Oil Painting', icon: require('../database/images/image@2x-0.png'), selected: false },
  { id: '2', name: 'Acrylic Painting', icon: require('../database/images/image@2x-1.png'), selected: false },
  { id: '3', name: 'Watercolor Painting', icon: require('../database/images/image@2x-2.png'), selected: false },
  { id: '4', name: 'Digital Painting', icon: require('../database/images/image@2x-3.png'), selected: false },
  { id: '5', name: 'Pencil Drawing', icon: require('../database/images/image@2x-4.png'), selected: false },
  { id: '6', name: 'Ink Drawing', icon: require('../database/images/image@2x-5.png'), selected: false },
  { id: '7', name: 'Charcoal Drawing', icon: require('../database/images/image@2x-6.png'), selected: false },
  { id: '8', name: 'Pastel Drawing', icon: require('../database/images/image@2x-7.png'), selected: false },
  { id: '9', name: 'Digital Illustrations', icon: require('../database/images/image@2x-8.png'), selected: false },
  { id: '10', name: 'Concept Art', icon: require('../database/images/image@2x-9.png'), selected: false },
  { id: '11', name: 'Landscape Photography', icon: require('../database/images/image@2x-10.png'), selected: false },
  { id: '12', name: 'Portrait Photography', icon: require('../database/images/image@2x-11.png'), selected: false },
  { id: '13', name: 'Abstract Photography', icon: require('../database/images/image@2x-12.png'), selected: false },
];

const ArtCategoriesScreen: React.FC<Props> = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(categories);

  const toggleSelection = (id: string) => {
    setSelectedCategories(prevState =>
      prevState.map(category =>
        category.id === id
          ? { ...category, selected: !category.selected } // Toggle selected property
          : category
      )
    );
  };

  const filteredCategories = selectedCategories.filter(category =>
    category.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#000', padding: 20 }}>
      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={[styles.progressSegment, styles.completed]} />
        <View style={styles.progressSegment} />
        <View style={styles.progressSegment} />
      </View>
      <Text style={{ color: '#fff', fontSize: 25, marginBottom: 28, fontWeight: '500' }}>Select art categories that describe you the best</Text>
      <TextInput
        style={{
          backgroundColor: '#333',
          color: '#fff',
          borderRadius: 10,
          padding: 10,
          marginBottom: 30,
        }}
        placeholder="Search"
        placeholderTextColor="#aaa"
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleSelection(item.id)} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Image source={item.icon} style={{ width: 60, height: 60, borderRadius: 5, marginRight: 15 }} />
            <Text style={{ color: '#fff', fontSize: 16 }}>{item.name}</Text>
            <View style={{ marginLeft: 'auto', paddingRight: 5 }}>
              {item.selected ? (
                <Text style={{ color: '#7BEE92' }}>✔</Text> // Checkmark
              ) : (
                <Text style={{ color: '#000' }}>⬜</Text> // Empty box
              )}
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#7BEE92',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
          marginBottom: -15
        }}
        onPress={() => navigation.navigate('AboutYouScreen')} 
      >
        <Text style={{ color: '#000', fontSize: 16, fontWeight: '600' }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create ({
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 36,
    marginTop: 40
  },
  progressSegment: {
    height: 4,
    width: 120,
    backgroundColor: '#555',
    marginHorizontal: 2,
    borderRadius: 2,
  },
  completed: {
    backgroundColor: '#6495ED',
  },
})

export default ArtCategoriesScreen;
