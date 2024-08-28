import React from 'react';
import { View, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.deliveryContainer}>
      <Image
                source={require('../database/icons/gps.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 20,
                }}
              />
        <Text style={styles.locationText}>Delivery: 96744, Puulena St 74, Kaneohe, HI</Text>
        <Image
                source={require('../database/icons/alarm-bell.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
      </View>

      <Card style={styles.featuredCard}>
        <ImageBackground
          source={ require('../database/images/cover.jpg') }
          style={styles.cardCover}
          imageStyle={{ borderRadius: 8 }}
        >
          <View style={styles.cardContentOverlay}>
          <Text variant="bodySmall" style={styles.herb}>Herbviore</Text>
            <Text variant="titleLarge" style={styles.cardTitle}>Mountaints and lakes</Text>
            {/* <Text variant="bodySmall" style={[styles.strikethroughText, styles.textColor]}>$36.00</Text> */}
            <Text variant="bodyLarge" style={styles.cardPrice}>$340.20</Text>
            <Button textColor='white' style={styles.cardButton}>Add to Cart</Button>
          </View>
        </ImageBackground>
      </Card>

      <View style={styles.categoriesHeader}>
        <Text variant="titleLarge" style={{ fontWeight: 'bold', color: '#565656'}}>Popular art categories</Text>
        <Text style={{color: '#3C6EEF', fontWeight: 'bold', marginLeft: 86}} onPress={() => {}}>See all</Text>
        <Image
                source={require('../database/icons/next.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: '#3C6EEF'
                }}
              />
      </View>
      <View style={styles.categoriesContainer}>
        {renderCategory('Oil paint..', require('../database/images/image@2x-0.png'))}
        {renderCategory('Acrylic p..', require('../database/images/image@2x-1.png'))}
        {renderCategory('Watercol..', require('../database/images/image@2x-2.png'))}
        {renderCategory('Digital p..', require('../database/images/image@2x-3.png'))}
        {renderCategory('Pencil dr..',  require('../database/images/image@2x-4.png'))}
      </View>
     
      <View style={styles.productsGrid}>
        {renderProduct('boat in the tornado', '$270.90', 'https://artfilemagazine.com/wp-content/uploads/2022/12/Famous-Oil-Paintings.jpg')}
        {renderProduct('Girl with umbrella', '$450.50', 'https://www.1st-art-gallery.com/media/catalog/product/cache/193ef6a9f006ae1b1bc12f2750137772/paintingsL/81443/the-walk-woman-with-a-parasol-.webp')}
        {renderProduct('Starry night', '$45.50', 'https://lofe.shop/imgupload/202401051736322558.jpg')}
        {renderProduct('Cowboy and the pets', '$45.50', 'https://maksartgallery.com/cdn/shop/collections/IMG_4939.jpg?v=1671658240&width=750')}
      </View>
    </ScrollView>
  );
};

const renderCategory = (title: string, icon: any) => (
  <View style={{ alignItems: 'center', marginBottom: 16 }}>
    <Image
      source={icon}
      style={{ width: 56, height: 56, borderRadius: 28 }}
      resizeMode="cover"
    />
    <Text style={{ marginTop: 8 }}>{title}</Text>
  </View>
    
);

const renderProduct = (name: string, price: string, imageUrl: string) => (
  <View style={styles.productContainer}>
    <ImageBackground
      source={{ uri: imageUrl }}
      style={styles.productImage}
      imageStyle={styles.imageBackground}
    >
    </ImageBackground>
    <View style={styles.productInfo}>
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>{price}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  locationText: {
     marginRight: 30,
     paddingLeft: 0,
  }, 
  deliveryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  featuredCard: {
    marginBottom: 16,
    borderRadius: 20
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
    color: '#C9D4D5',
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
    marginBottom: 30,
  
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
  productInfo: {
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#565656',
  },
  productPrice: {
    fontSize: 14,
    color: '#565656',  
    marginTop: 4,
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
