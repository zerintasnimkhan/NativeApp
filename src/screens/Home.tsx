import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity, FlatList, Animated } from 'react-native';
import { Text, Card, Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../contexts/ThemeContext'; 

const featuredImages = [
  {
    uri: require('../database/images/cover.jpg'),
    title: 'Mountains and Lakes',
    price: 340.20,
  },
  {
    uri: require('../database/images/image@2x-10.png'),
    title: 'Sunset Glory',
    price: 450.00,
  },
  {
    uri: require('../database/images/image@2x-7.png'),
    title: 'Mystical Abstract',
    price: 250.10,
  },
  {
    uri: require('../database/images/image@2x-9.png'),
    title: 'Ancient Sculptures',
    price: 320.15,
  },
];

interface Category {
  id: string;
  title: string;
  image: any; 
}

interface ImagesByCategory {
  [key: string]: string[];
}

const categories: Category[] = [
  { id: '1', title: 'Oil paint..', image: require('../database/images/image@2x-0.png') },
  { id: '2', title: 'Acrylic p..', image: require('../database/images/image@2x-1.png') },
  { id: '3', title: 'Watercolor', image: require('../database/images/image@2x-2.png') },
  { id: '4', title: 'Digital p..', image: require('../database/images/image@2x-3.png') },
  { id: '5', title: 'Pencil dr..', image: require('../database/images/image@2x-4.png') },
];

const imagesByCategory: ImagesByCategory = {
  '1': [
    'https://artfilemagazine.com/wp-content/uploads/2022/12/Famous-Oil-Paintings.jpg',
    'https://www.1st-art-gallery.com/media/catalog/product/cache/193ef6a9f006ae1b1bc12f2750137772/paintingsL/81443/the-walk-woman-with-a-parasol-.webp',
    'https://lofe.shop/imgupload/202401051736322558.jpg',
    'https://maksartgallery.com/cdn/shop/collections/IMG_4939.jpg?v=1671658240&width=750'
  ],
  '2': [
    'https://cdn.exoticindia.com/images/products/original/sculptures-2016/pab300.jpg',
    'https://static.picassomio.com/images/art/58/8b/b3/maxim-grunin-artwork-large-65624.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg',
    'https://gurdishpannu.com/wp-content/uploads/2020/08/layers-of-love.jpg'
  ],
  '3': [
    'https://blog.artsper.com/wp-content/uploads/2021/07/roger.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6H4gqETsh6xR1J_YwQnq2NAQX5X-3t6DiJaiFlhfsD-w5-bj1tDrpjE3hhhKcvz5jFw&usqp=CAU',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg',
    'https://gurdishpannu.com/wp-content/uploads/2020/08/layers-of-love.jpg'
  ],
  '4': [
    'https://cdn.exoticindia.com/images/products/original/sculptures-2016/pab300.jpg',
    'https://static.picassomio.com/images/art/58/8b/b3/maxim-grunin-artwork-large-65624.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg',
    'https://gurdishpannu.com/wp-content/uploads/2020/08/layers-of-love.jpg'
  ],
  '5': [
    'https://abirpothi.com/wp-content/uploads/2023/09/maxresdefault-1024x576.jpg',
    'https://cdn.mos.cms.futurecdn.net/bMczK6WXhNdaphfXC3iZVm.jpg',
    'data:image/jpeg;base64,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',
    'https://i.pinimg.com/474x/8e/f4/22/8ef422ceabc82276222e6ee050a7f567.jpg',
    
  ],
};

const generateRandomName = () => {
  const adjectives = ['Beautiful', 'Mystical', 'Ancient', 'Modern', 'Abstract', 'Elegant', 'Mysterious'];
  const nouns = ['Landscape', 'Portrait', 'Fantasy', 'Harmony', 'Chaos', 'Inspiration', 'Elegance'];
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${randomAdjective} ${randomNoun}`;
};

// Keep track of used names to ensure uniqueness
const usedNames = new Set<string>();

// Function to get a unique name
const getUniqueName = () => {
  let name = generateRandomName();
  // Ensure name is unique
  while (usedNames.has(name)) {
    name = generateRandomName();
  }
  usedNames.add(name);
  return name;
};


type RootStackParamList = {
  Home: undefined;
  CategoriesScreen: undefined;
};

// Use this type with StackNavigationProp
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const { toggleTheme, isDarkMode, theme } = useTheme();

  const dynamicStyles = StyleSheet.create({
    deliveryContainer: {
      color: isDarkMode ? '#fff' : '#000',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 22,
    },
    locationText: {
      color: isDarkMode ? '#fff' : '#000',
      marginRight: 30,
      paddingLeft: 0,
   }, 
   productInfo: {
    backgroundColor: isDarkMode ? '#000' : '#fff',
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: isDarkMode ? '#fff' : '#565656',
  },
  productPrice: {
    fontSize: 14,
    color: isDarkMode ? '#fff' : '#565656', 
    marginTop: 4,
  },
  })
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryPress = (id: string) => {
    setSelectedCategory(id);
  };
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % featuredImages.length;
      flatListRef.current?.scrollToIndex({ animated: true, index: currentIndex });
    }, 5000); // Adjust the time interval as needed

    return () => clearInterval(interval);
  }, []);

  const iconSource = theme.mode === 'light'
  ? require('../database/icons/sun.png') // Replace with your light mode icon path
  : require('../database/icons/moon.png'); 

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={dynamicStyles.deliveryContainer}>
        <Image source={require('../database/icons/gps.png')} resizeMode="contain" style={{ width: 25, height: 20 }} />
        <Text style={dynamicStyles.locationText}>Delivery: 96744, Puulena St 74, Kaneohe, HI</Text>
        <Image source={require('../database/icons/alarm-bell.png')} resizeMode="contain" style={{ width: 22, height: 22, marginRight: 5, marginLeft: -10 }} />
        <TouchableOpacity onPress={toggleTheme}>
        <Image
          source={iconSource}
          style={[styles.icon, { tintColor: theme.text }]}
        />
      </TouchableOpacity>
      </View>

      {/* <Card style={styles.featuredCard}>
        <ImageBackground
          source={require('../database/images/cover.jpg')}
          style={styles.cardCover}
          imageStyle={{ borderRadius: 8 }}
        >
          <View style={styles.cardContentOverlay}>
            <Text variant="bodySmall" style={styles.herb}>Herbviore</Text>
            <Text variant="titleLarge" style={styles.cardTitle}>Mountaints and lakes</Text>
            <Text variant="bodyLarge" style={styles.cardPrice}>$340.20</Text>
            <Button textColor='white' style={styles.cardButton}>Add to Cart</Button>
          </View>
        </ImageBackground>
      </Card> */}

      {/* Horizontal ScrollView for the featured card */}
      <FlatList
        data={featuredImages}
        ref={flatListRef}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <View style={styles.featuredCard}>
            <ImageBackground
              source={item.uri}
              style={styles.cardCover}
              imageStyle={{ borderRadius: 8 }}
            >
              <View style={styles.cardContentOverlay}>
                {/* <Text variant="bodySmall" style={styles.herb}>Herbviore</Text> */}
                <Text variant="titleLarge" style={styles.cardTitle}>{item.title}</Text>
                <Text variant="bodyLarge" style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
                <Button textColor='white' style={styles.cardButton}>Add to Cart</Button>
              </View>
            </ImageBackground>
          </View>
        )}
      />
      <View style={styles.categoriesHeader}>
        <Text variant="titleLarge" style={{ fontWeight: 'bold', color: '#565656' }}>Popular art categories</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CategoriesScreen')}>
          <Text style={{ color: '#3C6EEF', fontWeight: 'bold', marginLeft: 80 }}>See all</Text>
        </TouchableOpacity>
        <Image
          source={require('../database/icons/next.png')}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: '#3C6EEF' }}
        />
      </View>

      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} onPress={() => handleCategoryPress(category.id)}>
            <View style={{ alignItems: 'center', marginBottom: 16 }}>
              <Image
                source={category.image}
                style={{ width: 56, height: 56, borderRadius: 28 }}
                resizeMode="cover"
              />
              <Text style={{ marginTop: 8, color: isDarkMode ? '#fff' : '#565656' }}>{category.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.productsGrid}>
      <View style={styles.productsGrid}>
        {(selectedCategory ? imagesByCategory[selectedCategory] : []).map((imageUrl, index) => {
          const productName = getUniqueName(); // Get a unique name for each artwork
          return (
            <View key={index} style={styles.productContainer}>
              <ImageBackground
                source={{ uri: imageUrl }}
                style={styles.productImage}
                imageStyle={styles.imageBackground}
              />
              <View style={dynamicStyles.productInfo}>
                <Text style={dynamicStyles.productName}>{productName}</Text>
                <Text style={dynamicStyles.productPrice}>$190.00</Text>
              </View>
            </View>
          );
        })}
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 10,
    marginRight: 30
  },
  
  featuredScroll: {
    height: 250, // Adjust based on your card's height
    marginBottom: 16,
    
  },
  featuredCard: {
    marginBottom: 16,
    borderRadius: 20,
    width: 346, // Adjust based on your desired card width
    marginHorizontal: 10,
  },
  cardCover: {
    height: 200,
    justifyContent: 'flex-end',
  },
  cardContentOverlay: {
    padding: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    color: '#F1F1F1',
  },

  categoryText: {
    fontSize: 14,
    color: '#565656',
  },
  category: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'grey',
  },
  cardPrice: {
    color: '#C9D4D5',
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardButton: {
    marginTop: 26,
    marginRight: 230,
    marginBottom: 12,
    backgroundColor: '#3C6EEF',
    borderRadius: 10,
    width: 110,
    height: 38,
    fontSize: 20,
    fontWeight: 'bold'
    
  },
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 12
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  
  },
  // category: {
  //   alignItems: 'center',
  //   backgroundColor: 'white',
  //   borderColor: 'grey',
  // },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productsContainer: {
    width: '48%',  
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    overflow: 'hidden',
  },
  productContainer: {
    width: '48%',
    marginBottom: 16,
  },
  productImage: {
    width: '100%',
    height: 200,  
    borderWidth: 1,
    borderColor: '#E0E0E0',  
    borderRadius: 15,
    overflow: 'hidden',  
  },

  imageBackground: {
    borderColor: '#E0E0E0',  
    borderRadius: 15,
    backgroundColor: '#E0E0E0',  
  },
  textColor: {
    color: '#A9A9A9',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
    marginTop: 8
  },
  herb: {
    fontWeight: 'bold',
    color: '#565656',
    marginTop: 10

  }
});

export default Home;
